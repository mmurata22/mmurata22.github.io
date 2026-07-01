import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SSI.css'; // Reusing your standard case study CSS

// --- ASSETS ---
// Save your Figma screenshots or App screenshots to assets folder
import ourionHero from '../assets/Ourion Front Page.png';
import figmaDesign from '../assets/Ourion Figma.png'; 
import process from '../assets/Ourion Process.png';
import architecture from '../assets/Desired Ourion Architecture.png';

// Reusable text/data equivalent of the .image-full blocks — for SQL, schemas, JSON, etc.
const CodeBlock = ({ title, children, caption }) => (
  <div className="code-block-full">
    <div className="code-window">
      {title && <div className="code-window-title">{title}</div>}
      <pre><code>{children}</code></pre>
    </div>
    {caption && <p className="caption">{caption}</p>}
  </div>
);

const Ourion = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container page-content">
      
      {/* --- 1. HERO HEADER --- */}
      <header className="case-study-hero">
        <span className="client-name">Independent Startup Project</span>
        <h1 className="page-title">Ourion: AI-Powered Waste Sorting</h1>
        <p className="lead-text">
          A computer vision software suite designed to automate the identification and categorization 
          of recyclable materials to streamline waste management processes.
        </p>
      </header>

      {/* --- 2. SPECS GRID --- */}
      <div className="project-specs">
        <div className="spec-item">
          <h4>Role</h4>
          <p>Full Stack Engineer & ML Researcher</p>
        </div>
        <div className="spec-item">
          <h4>Stack</h4>
          <p>React, Python (Flask), OpenCV, Docker</p>
        </div>
        <div className="spec-item">
          <h4>Context</h4>
          <p>Computer Vision Startup</p>
        </div>
      </div>

      {/* --- 2.5 GITHUB LINKS --- */}
      <div className="link-section" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <a 
          href="https://github.com/mmurata22/ourion" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="live-site-btn"
          style={{ marginRight: '1rem' }}
        >
          Frontend Repo ↗
        </a>
        <a 
          href="https://ourion.app" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="live-site-btn"
          style={{  }}
        >
          Live Site ↗
        </a>
      </div>

      <div className="case-study-body">

        {/* --- 3. THE CHALLENGE --- */}
        <section className="cs-section">
          <h2>The Challenge: Recycling Inefficiency</h2>
          <p>
            Recycling rates are often bottlenecked by human error and sorting inefficiency. 
            Facilities struggle to quickly differentiate between similar-looking materials (e.g., Clear PET plastic vs. Glass), 
            leading to contaminated batches and increased landfill waste.
          </p>
          <p>
            The goal was to create a scalable, camera-based system that could "see" materials and sort them in real-time, 
            bridging the gap between physical sorting machinery and digital intelligence.
          </p>
        </section>

        {/* --- 4. SOLUTION OVERVIEW --- */}
        <section className="cs-section">
          <h2>The Solution</h2>
          <p>
            Ourion is a split-stack application. The Backend utilizes OpenCV and Deep Learning models (TensorFlow/PyTorch) 
            to process video feeds. The Frontend provides a React-based monitoring dashboard 
            for facility administrators to track error rates and material categorization.
          </p>

          <div className="image-full">
            {ourionHero ? (
              <img src={process} alt="Ourion Main Ideology" />
            ) : (
              <div className="placeholder-box">How Ourion Works: Simplified</div>
            )}
            <p className="caption">The conceptual overview of how Ourion operates.</p>
          </div>
          
        </section>

        {/* --- 5. UI/UX DESIGN (Figma) --- */}
        <section className="cs-section">
          <h2>Design & Prototyping</h2>
          <p>
            Before writing any code, I developed a comprehensive design system in Figma. 
            The interface needed to be high-contrast and readable at a glance for operators working in fast-paced industrial environments.
          </p>

          <div className="image-full">
            {ourionHero ? (
              <img src={ourionHero} alt="Ourion Main Dashboard" />
            ) : (
              <div className="placeholder-box">Main Dashboard Screenshot</div>
            )}
            <p className="caption">The React-based Dashboard for real-time monitoring.</p>
          </div>

          <p>
            I focused on clear data visualization for the "Sorting Performance" analytics and intuitive controls for adjusting recognition parameters.
          </p>
          
          <div className="image-full">
             {figmaDesign ? (
               <img src={figmaDesign} alt="Figma High Fidelity Mockups" />
             ) : (
               <div className="placeholder-box" style={{ background: '#2c2c2c', color: '#fff' }}>
                 [Figma Design System Screenshot]
               </div>
             )}
             <p className="caption">High-fidelity prototypes designed in Figma prior to React implementation.</p>
          </div>
        </section>

        {/* --- 6. TECHNICAL ARCHITECTURE --- */}
        <section className="cs-section">
          <h2>Technical Architecture</h2>
          <p>
            The system relies on a decoupled architecture to ensure the heavy machine learning processing doesn't lag the user interface.
          </p>

          <div className="image-full">
            {architecture ? (
              <img src={architecture} alt="Ourion Architecture" />
            ) : (
              <div className="placeholder-box">Desired Architecture</div>
            )}
            <p className="caption">The planned architecture for the Ourion system.</p>
          </div>

          <div className="image-grid-2">
            <div>
              <h4 style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>Frontend (React)</h4>
              <p style={{ fontSize: '0.95rem' }}>
                A responsive SPA built with React and Node.js. It communicates with the backend via RESTful endpoints. 
                I set up the development environment using WSL (Ubuntu) and NVM to ensure consistent node versions across development machines.
              </p>
            </div>

            <div>
              <h4 style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>Backend (Flask & OpenCV)</h4>
              <p style={{ fontSize: '0.95rem' }}>
                A Python Flask API that runs <code>opencv-python-headless</code> for server-optimized image processing. 
                The application is containerized using Docker to handle dependencies like Gunicorn and system-level CV libraries without conflicts.
              </p>
            </div>
          </div>
        </section>

        {/* --- 7. DEVELOPMENT ENVIRONMENT --- */}
        <section className="cs-section">
           <h2>DevOps & Workflow</h2>
           <p>
             To maintain code quality across the full stack, I established a strict development workflow:
           </p>
           <ul style={{ lineHeight: '1.6', color: '#444' }}>
              <li><strong>Containerization:</strong> Used Docker Desktop with WSL 2 backend to ensure the Python environment matched production Linux servers.</li>
              <li><strong>Version Control:</strong> Maintained separate repositories for Frontend and Backend with SSH-key authentication for secure access.</li>
              <li><strong>Deployment:</strong> Configured for deployment on platforms like Render, using environment variables to dynamically link the React frontend to the live Flask API.</li>
           </ul>
        </section>

        <section className="cs-section">
          <h2>CV Multi-Tier Filter</h2>
          <p>Recyclable materials often are flawed, unique, and do not fall under a specific look, making it harder to visually sort them through
            a specific "look-out" guide.</p>
          <p>To address this, I implemented a multi-tiered filtering system in the CV pipeline that detects barcodes (straightforward ID),
            then through physical characteristics, such as transparency, shape, color, and key words found on packing (ex., Coke bottles are likely PET, aluminum cans are likely aluminum).
          </p>
          <CodeBlock title="Multi-Tiered Filtering Logic" caption="Logic for multi-tiered filtering system in the CV pipeline.">
            {`Barcode: Attempts to find specific information based on barcode info
Computer Vision: Analyzes for more info if the initial barcode info is not specific.
Ex: the bottle is transparent, therefore, it is likely a PET bottle.
Ex: the reflectiveness of a package makes it likely an aluminum or metal product
Ex: The material matte and may be paper

= weight based scoring system

Multi-Channel Filtering Logic

Channel A: Optical CV Indicators
Ex: Transparency; If true -> +5 points for PET
Ex: Color: If while/opaque -> +5 points for HDPE
Ex: Shape: If bottle -> +3 points for PET/HDPE
If Tub/Cup -> +3 points for PP

Channel B: Keyword Indicators
Search for packaging_text/product_name from the API
Explicit: PET, PETE, 1 = 10 points or instant match
Contextual: Water, soda, coke, = 4 points for PET
Milk, bleach, detergent = 4 points for HDPE
Yogurt, butter, margarine, = 4 points for PP

Channel C: Metadata
Consumption Friendly: If category is beverage, there is a high likelihood of it being a PET

Handle “Unrecognizable” Red Flag
Blacklist filter
Bio-degradable, compostable, film, wrapper, pouch, styrofoam, PS
Flexible packages like a chip back auto-goes into trash/special handling
`}
          </CodeBlock>
        </section>

        <section className="cs-section">
          <h2>Municipal Recycling Data Standardization</h2>
          <p>Recycling rules vary wildly between municipalitiesl, like what's accepted, how it needs to be prepped, even what counts as 'plastic' differs from city to city. There's no standardized way to compare or query this data.</p>
          <p>I designed a structured schema to normalize recycling guidelines across municipalities by breaking each material category (Plastic, Metal, Glass, Organic, etc.) into consistent fields: allowed items, disallowed items, and special handling instructions.</p>
          <p>Each entry is parsed into a consistent [ALLOWED / NOT_ALLOWED / SPECIAL_INSTRUCTIONS] format, making it possible to programmatically compare rules across cities (like Bethlehem vs. Allentown) instead of manually cross-referencing municipal PDFs and web pages.</p>

          <CodeBlock title="Data Schema" caption="Normalized schema used to compare recycling rules across municipalities.">
{`Categories

PLASTIC (1, 2, 3, 4, 5, 6, 7, Other)
METAL (Aluminum, Other)
SPECIAL WASTE (Batteries, Electronics, Tires, Used Oil)
ORGANIC (Food, Lawn Materials)
GLASS
PAPER (Paper, cardboard)
MISCELLANEOUS
HAZARDS (Chemicals, Household Hazards)

https://www.bethlehem-pa.gov/Community-Economic-Development/Recycling/Residential-Curbside-Recycling

OVERALL_SPECIAL_INSTRUCTIONS: [NO CARDBOARD BOXES, PLASTIC OR PAPER BAGS TO BE USED FOR STORAGE OF MATERIALS, All materials are to be placed in containers loose. NO BOOKS (hard or soft cover)]

METAL:
ALLOWED: [Aluminum, tin, steel, bimetalic, aerosol cans formed aluminum containers]
If metal, NOT_ALLOWED: [toxic materials, flammable materials, paint cans]

GLASS:
ALLOWED: [Clear beverage jar, green beverage jar, brown food beverage jar, bottles with caps]
If glass, NOT_ALLOWED: [drinking glasses, window panes, light bulbs, mirrors, ceramic, china, porcelain]
SPECIAL_INSTRUCTIONS: [Do not crush]

PLASTICS:
ALLOWED: [Plastic bottles and containers labeled #1-7]
If plastic, NOT_ALLOWED: [Styrofoam, plastic bags, film, plastic toys]
SPECIAL_INSTRUCTIONS: [Crush, Plastics must be smaller than a 5-gallon container, Remove caps and then recycle containers and caps]

MIXED (Separate to plastics and paper):
If plastic/paper, ALLOWED: [Milk cartons, soup cartons, broth cartons, orange juice, ice cream containers, juice containers]

Mixed, must separate to plastics and papers
ALLOWED: [Newspapers, Magazines, Catalogs, Shiny paper, Paper bags, Phone books, Mixed office paper, Non-shiny junk mail, Bond paper, Booklets, pamphlets, Calculator tape, Carbonless forms, Computer paper, Copier paper & wrappers, Envelopes (with & without window), Index cards, Ledger paper, Manila file folders (all colors), Post-its, Scratch paper (without cardboard backing), Tabbed dividers, Writing tablets (without cardboard backing)]
NOT_ALLOWED: [Scratchpaper with cardboard backing, writing tablets with cardboard backing, shiny junk mail]

Corrugated cardboard boxes – 
SPEICAL_INSTRUCTIONS:  [Flatten and put in container loose. If there is too much to put in container, flatten in bundles no larger than 2’ X 4’ and tie with string.]
NOT_ALLOWED: [tape, wax coated cardboard]

Flatboard
ALLOWED: [Cereal boxes, tissue boxes, gift boxes]
SPECIAL_INSTRUCTIONS: [remove liner. Should be brown,  gray or white on the inside when torn. ]

https://www.allentownpa.gov/Portals/0/adam/Content/L97JvMxOtk2RWMEVN9gXJQ/Url/Allentown-City-final.pdf


OVERALL_SPECIAL_INSTRUCTIONS: [Curbside recycling is unlimited and may only be placed out in City-issued recycling bins.  Single Stream Recycling means all of your recyclables (bottles, cans, cartons, paper, card- board) can go into the same bin. Bigger cardboard boxes
should be flattened, bundled, and placed next to the recycling bin.]

ALLOWED: [All types of paper, Flattened cardboard and paperboard, Glass bottles and jars (food and beverage only), Plastic bottles and containers (#1-#7), Food and beverage cans (aluminum and steel), Aluminum foil and pie plates, Food and beverage cartons (milk, juice, soup, etc.)]

NOT ALLOWED: [Styrofoam, food scraps,  Kid’s Toys, Tissues, Napkins, Paper Towels, Plastic utensils, paper plates, Plastic bags, plastic wraps, household electronics, household appliances, lumber, tiles, tools, construction debris, window glass, mirrors, ceramics, dishes, batteries]



So,

4 categories have explicit NOT_ALLOWED tags. Therefore, whenever we hit the zip_code, look for product, then check if the product is within that zip_codes NOT_ALLOWED. 
If yes, then hit a do not recycle page. 
If no, check for special instructions
If special instructions, display special instructions per zip_code note
If not, display usual instructions

If find the word non, not, without, then must be an unallowed/special instruction item`}
          </CodeBlock>

          <p>This makes it possible to build tools (like a lookup app or comparison dashboard) on top of data that's normally scattered across inconsistent government websites.</p>
        </section>

        <section className="cs-section">
          <h2>Key Takeaways</h2>
          <p>
            This project reinforced the importance of a well-structured development workflow and the value of containerization in ensuring consistent deployments. 
            It also highlighted the significance of maintaining a clear separation of concerns between the frontend and backend, which contributed to a more maintainable and scalable codebase.
            Ourion helped me gain experience in running cross-disciplindary projects that combine both technical and business considerations.
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

export default Ourion;