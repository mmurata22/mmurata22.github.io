export function initGradient() {
    const canvas = document.getElementById("fluid-canvas");
    if (!canvas) return;
    const gl = canvas.getContext("webgl");

    const CONFIG = {
        blurAmount: 100,
        blurQuality: 3,
        colors: [] 
    };

    const simplex_noise_glsl = `
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ; m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
    }

    float simplex_noise(vec3 v){ 
        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 = v - i + dot(i, C.xxx) ;
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy; 
        vec3 x3 = x0 - D.yyy;      
        i = mod289(i); 
        vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
        float n_ = 0.142857142857; 
        vec3  ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z); 
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );    
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
    }
    `;

    function createGradientTexture(gl) {
        const width = 256;
        const height = 1;
        const textureCanvas = document.createElement("canvas");
        textureCanvas.width = width;
        textureCanvas.height = height;
        const ctx = textureCanvas.getContext("2d");
        const grad = ctx.createLinearGradient(0, 0, width, 0);

        grad.addColorStop(0.00, "#00FFFF");
        grad.addColorStop(0.35, "#3a60ff");
        grad.addColorStop(0.70, "#9d00ff");
        grad.addColorStop(1.00, "#FF00FF");

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);

        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureCanvas);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        return texture;
    }

    const fragmentShaderSource = `
    precision mediump float;
    uniform float u_time;
    uniform float u_h;
    uniform float u_w;
    uniform sampler2D u_gradient;
    const float PI = 3.14159;
    ${simplex_noise_glsl}
    float get_x() { return 900.0 + gl_FragCoord.x - u_w / 2.0; }
    float smoothstep_custom(float t) { return t * t * t * (t * (6.0 * t - 15.0) + 10.0); }
    float lerp(float a, float b, float t) { return a * (1.0 - t) + b * t; }
    float ease_in(float x) { return 1.0 - cos((x * PI) * 0.5); }
    float wave_alpha_part(float dist, float blur_fac, float t) {
        float exp = mix(0.9, 1.2, t);
        float v = pow(blur_fac, exp);
        v = ease_in(v);
        v = smoothstep_custom(v);
        v = clamp(v, 0.008, 1.0);
        v *= ${CONFIG.blurAmount.toFixed(1)};
        float alpha = clamp(0.5 + dist / v, 0.0, 1.0);
        alpha = smoothstep_custom(alpha);
        return alpha;
    }
    float background_noise(float offset) {
        const float S = 0.064;
        const float L = 0.00085;
        const float L1 = 1.5, L2 = 0.9, L3 = 0.6;
        const float LY1 = 1.00, LY2 = 0.85, LY3 = 0.70;
        const float F = 0.04;
        const float Y_SCALE = 1.0 / 0.27;
        float x = get_x() * L;
        float y = gl_FragCoord.y * L * Y_SCALE;
        float time = u_time + offset;
        float x_shift = time * F;
        float sum = 0.5;
        sum += simplex_noise(vec3(x * L1 +  x_shift * 1.1, y * L1 * LY1, time * S)) * 0.30;
        sum += simplex_noise(vec3(x * L2 + -x_shift * 0.6, y * L2 * LY2, time * S)) * 0.25;
        sum += simplex_noise(vec3(x * L3 +  x_shift * 0.8, y * L3 * LY3, time * S)) * 0.20;
        return sum;
    }
    float wave_y_noise(float offset) {
        const float L = 0.000845;
        const float S = 0.075;
        const float F = 0.026;
        float time = u_time + offset;
        float x = get_x() * 0.000845;
        float y = time * S;
        float x_shift = time * 0.026;
        float sum = 0.0;
        sum += snoise(vec2(x * 1.30 + x_shift, y * 0.54)) * 0.85;
        sum += snoise(vec2(x * 1.00 + x_shift, y * 0.68)) * 1.15;
        sum += snoise(vec2(x * 0.70 + x_shift, y * 0.59)) * 0.60;
        sum += snoise(vec2(x * 0.40 + x_shift, y * 0.48)) * 0.40;
        return sum;
    }
    float calc_blur_bias() {
        const float S = 0.261;
        float bias_t = (sin(u_time * S) + 1.0) * 0.5;
        return lerp(-0.17, -0.04, bias_t);
    }
    float calc_blur(float offset) {
        const float L = 0.0011;
        const float S = 0.07;
        const float F = 0.03;
        float time = u_time + offset;
        float x = get_x() * L;
        float blur_fac = calc_blur_bias();
        blur_fac += snoise(vec2(x * 0.60 + time * F * 1.0, time * S * 0.7)) * 0.5;
        blur_fac += snoise(vec2(x * 1.30 + time * F * -0.8, time * S * 1.0)) * 0.4;
        blur_fac = (blur_fac + 1.0) * 0.5;
        blur_fac = clamp(blur_fac, 0.0, 1.0);
        return blur_fac;
    }
    float wave_alpha(float Y, float wave_height, float offset) {
        float wave_y = Y + wave_y_noise(offset) * wave_height;
        float dist = wave_y - gl_FragCoord.y;
        float blur_fac = calc_blur(offset);
        const float PART = 1.0 / float(${CONFIG.blurQuality.toFixed(1)});
        float sum = 0.0;
        for (int i = 0; i < ${CONFIG.blurQuality}; i++) {
            float t = ${CONFIG.blurQuality} == 1 ? 0.5 : PART * float(i);
            sum += wave_alpha_part(dist, blur_fac, t) * PART;
        }
        return sum;
    }
    vec3 calc_color(float lightness) {
        lightness = clamp(lightness, 0.0, 1.0);
        return vec3(texture2D(u_gradient, vec2(lightness, 0.5)));
    }
    void main() {
        float WAVE1_Y = 0.45 * u_h;
        float WAVE2_Y = 0.9 * u_h;
        float WAVE1_HEIGHT = 0.195 * u_h;
        float WAVE2_HEIGHT = 0.144 * u_h;
        float bg_lightness = background_noise(-192.4);
        float w1_lightness = background_noise( 273.3);
        float w2_lightness = background_noise( 623.1);
        float w1_alpha = wave_alpha(WAVE1_Y, WAVE1_HEIGHT, 112.5 * 48.75);
        float w2_alpha = wave_alpha(WAVE2_Y, WAVE2_HEIGHT, 225.0 * 36.00);
        float lightness = bg_lightness;
        lightness = lerp(lightness, w2_lightness, w2_alpha);
        lightness = lerp(lightness, w1_lightness, w1_alpha);
        gl_FragColor = vec4(calc_color(lightness), 1.0);
    }
    `;

    const vertexShaderSource = `
    attribute vec2 position;
    void main() { gl_Position = vec4(position, 0.0, 1.0); }
    `;

    function createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    if (gl) {
        const program = gl.createProgram();
        const vShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
        
        if (vShader && fShader) {
            gl.attachShader(program, vShader);
            gl.attachShader(program, fShader);
            gl.linkProgram(program);

            if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
                gl.useProgram(program);
                const buffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                    -1, -1, 1, -1, -1, 1,
                    -1, 1, 1, -1, 1, 1
                ]), gl.STATIC_DRAW);

                const positionLoc = gl.getAttribLocation(program, "position");
                gl.enableVertexAttribArray(positionLoc);
                gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

                const uTime = gl.getUniformLocation(program, "u_time");
                const uW = gl.getUniformLocation(program, "u_w");
                const uH = gl.getUniformLocation(program, "u_h");
                const gradientTexture = createGradientTexture(gl);
                const uGradient = gl.getUniformLocation(program, "u_gradient");
                gl.activeTexture(gl.TEXTURE0);
                gl.bindTexture(gl.TEXTURE_2D, gradientTexture);
                gl.uniform1i(uGradient, 0);

                function resize() {
                    const scale = 0.5;
                    canvas.width = window.innerWidth * scale;
                    canvas.height = window.innerHeight * scale;
                    gl.viewport(0, 0, canvas.width, canvas.height);
                    gl.uniform1f(uW, canvas.width);
                    gl.uniform1f(uH, canvas.height);
                }

                window.addEventListener("resize", resize);
                resize();

                function animate(time) {
                    gl.uniform1f(uTime, time * 0.001); 
                    gl.drawArrays(gl.TRIANGLES, 0, 6);
                    requestAnimationFrame(animate);
                }
                requestAnimationFrame(animate);

                setTimeout(() => {
                    if(canvas) {
                        canvas.style.opacity = "1"; 
                        canvas.classList.add("loaded"); 
                    }
                }, 200); 
            }
        }
    }
}