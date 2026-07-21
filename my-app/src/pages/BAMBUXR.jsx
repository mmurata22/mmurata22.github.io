import React from 'react';
import { Link } from 'react-router-dom';
import './BAMBUXR.css';

const BAMBUXR = () => {
  return (
    <div className="container page-content">

      {/* --- 1. HEADER --- */}
      <header className="case-study-hero">
        <span className="client-name">Personal Project / WebXR</span>
        <h1 className="page-title">Bambu X1C WebXR Training Shell</h1>
        <p className="lead-text">
          A browser-based VR training scene for the Bambu Lab X1C 3D printer, built with React Three Fiber
          and WebXR — designed to run on a headset, in a desktop browser, or on mobile with no extra setup.
        </p>
      </header>

      {/* --- 2. SPECS GRID --- */}
      <div className="project-specs">
        <div className="spec-item">
          <h4>Role</h4>
          <p>Developer</p>
        </div>
        <div className="spec-item">
          <h4>Tools</h4>
          <p>React, Vite, React Three Fiber, drei, React Three XR</p>
        </div>
        <div className="spec-item">
          <h4>Context</h4>
          <p>Personal / Independent Project</p>
        </div>
        <div className="spec-item">
          <h4>Platform</h4>
          <p>WebXR (Meta Quest + Desktop Fallback)</p>
        </div>
      </div>

      {/* --- 2.5 GITHUB LINKS --- */}
      <div className="link-section" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <a
          href="https://github.com/mmurata22/BAMBUXR"
          target="_blank"
          rel="noopener noreferrer"
          className="live-site-btn"
        >
          GitHub Repo ↗
        </a>
        <a
          href="https://mmurata22.github.io/BAMBUXR/"
          target="_blank"
          rel="noopener noreferrer"
          className="live-site-btn"
        >
          Live Site ↗
        </a>
      </div>

      {/* --- 3. FULL SCOPE SECTION --- */}
      <div className="scope-section" style={{ marginBottom: '4rem', padding: '2rem', background: '#fff', border: '1px solid #eee', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
        <h3 style={{ marginTop: 0, fontFamily: 'Mukta, sans-serif' }}>Full Scope of Responsibilities</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          This project is the scene shell for a larger training module. My contributions cover the full
          technical foundation the rest of the experience will be built on:
        </p>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', paddingLeft: '1.2rem' }}>
          <li><strong>Scene Architecture:</strong> Set up the React Three Fiber canvas, room environment, lighting, and grid floor.</li>
          <li><strong>Cross-Platform Input:</strong> Implemented WebXR session handling alongside a desktop/mobile OrbitControls fallback.</li>
          <li><strong>Extensibility Planning:</strong> Isolated the printer model behind named hotspot meshes so the placeholder can be swapped for a real GLTF model without touching app logic.</li>
        </ul>
      </div>

      <div className="case-study-body">

        {/* --- 4. THE CHALLENGE --- */}
        <section className="cs-section">
          <h2>The Challenge</h2>
          <p>
            3D printer training usually means standing in front of the machine, which doesn't scale well for
            onboarding new users. The goal was a WebXR scene that works whether or not someone actually has a
            headset — a Quest owner should be able to drop straight into VR, while anyone else can still explore
            the same scene with a mouse or touchscreen.
          </p>
          <p>
            The other constraint was future-proofing: the real X1C model wasn't ready yet, so the shell needed to
            be built around a placeholder that could be swapped later without reworking the interaction code.
          </p>
        </section>

        {/* --- 5. STACK --- */}
        <section className="cs-section">
          <h2>Stack</h2>
          <p>
            The shell is built on React and Vite, with React Three Fiber handling the 3D scene. drei provides the
            OrbitControls, Grid, and Text helpers, and React Three XR (v6) wraps the WebXR session logic through
            <code> createXRStore</code> and <code>&lt;XR&gt;</code>.
          </p>
        </section>

        {/* --- 6. DESKTOP + MOBILE FALLBACK --- */}
        <section className="cs-section">
          <h2>Desktop &amp; Mobile Fallback</h2>
          <p>
            Not every visitor has a headset on hand, so the scene never assumes one. If no XR session is active,
            it falls back automatically to OrbitControls — click-drag to orbit, scroll to zoom — behaving like any
            standard Three.js scene. The VR entry button also feature-detects <code>immersive-vr</code> support via
            <code> navigator.xr.isSessionSupported</code>, disabling itself with a "VR not available" label on
            unsupported browsers instead of failing silently when clicked.
          </p>
        </section>

        {/* --- 7. FILE STRUCTURE --- */}
        <section className="cs-section">
          <h2>File Structure</h2>
          <p>
            The shell is kept intentionally small and modular — a Canvas and XR store in the app root, with the
            room environment and printer stand-in split into their own components.
          </p>

          <div className="code-block-full">
            <div className="code-window">
              <div className="code-window-title">src/ File Tree</div>
              <pre><code>{`src/
  App.jsx                    — XR store, Canvas, VR toggle, fallback controls
  components/
    Room.jsx                 — floor, walls, grid, lighting
    PlaceholderPrinter.jsx   — primitive-built stand-in for the X1C model`}</code></pre>
            </div>
          </div>
        </section>

        {/* --- 8. SWAPPING IN THE REAL MODEL --- */}
        <section className="cs-section">
          <h2>Designing for the Real Model</h2>
          <p>
            <code>PlaceholderPrinter.jsx</code> is deliberately isolated so it can be replaced with a real GLTF
            export without touching <code>App.jsx</code> or <code>Room.jsx</code>. As long as the swapped-in model
            keeps the same root position and named hotspot meshes, any hotspot or interaction logic built against
            the shell keeps working with no rewiring.
          </p>

          <div className="code-block-full">
            <div className="code-window">
              <div className="code-window-title">Hotspot Meshes</div>
              <pre><code>{`hotspot-screen
hotspot-bed-plate
hotspot-ams`}</code></pre>
            </div>
          </div>

          <p>
            Scale was handled the same way: the placeholder is modeled in real-world meters, matching the X1C's
            approximate 389 × 389 × 458mm footprint, so reach and distance in VR should already read correctly once
            the final model is dropped in.
          </p>
        </section>

        {/* --- 9. TESTING WITHOUT A HEADSET --- */}
        <section className="cs-section">
          <h2>Testing Without a Headset</h2>
          <p>
            A built-in dev emulator (<code>createXRStore({'{'} emulate: true {'}'})</code>) is wired up for dev
            builds, surfacing an on-screen simulated headset/controller rig. For more reliable day-to-day testing,
            the Immersive Web Emulator browser extension adds a DevTools panel that simulates a full XR session,
            including controller position and button state.
          </p>
        </section>

        {/* --- 10. TESTING ON A PHYSICAL QUEST --- */}
        <section className="cs-section">
          <h2>Testing on a Physical Quest</h2>
          <p>
            <code>localhost</code> only counts as a secure context on the machine running the dev server, so
            reaching the page from a headset over LAN requires real HTTPS. Running <code>npm run dev:https</code>
            enables a self-signed certificate via <code>vite-plugin-basic-ssl</code>, letting the Quest browser
            connect directly to the dev machine's local IP.
          </p>
        </section>

      </div>

      {/* --- FOOTER --- */}
      <div className="case-study-footer">
        <Link to="/work" className="back-link">← Back to Selected Work</Link>
      </div>

    </div>
  );
};

export default BAMBUXR;