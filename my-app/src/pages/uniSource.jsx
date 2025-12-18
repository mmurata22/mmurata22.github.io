import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Re-using the same CSS from SSI case study for consistency
import './SSI.css'; 

// --- ASSETS ---
import dashboardUI from '../assets/uniSource Admin Dashboard.png';
import schemaDiagram from '../assets/uniSource Database Diagram.png';
import archDiagram from '../assets/uniSource Architecture Diagram.png';
import publicFragmentUI from '../assets/uniSource Fragmentation.png';

const UniSource = () => {
  
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container page-content">
      
      {/* HERO HEADER */}
      <header className="case-study-hero">
        <span className="client-name">Lehigh University / CS Department</span>
        <h1 className="page-title">uniSource: Curriculum Management</h1>
        <p className="lead-text">
          A centralized full-stack platform designed to replace fragmented spreadsheets. 
          uniSource creates a unified source of truth for course scheduling, faculty workload, and curriculum tracking.
        </p>
      </header>

      {/* 2. SPECS GRID */}
      <div className="project-specs">
        <div className="spec-item">
          <h4>Role</h4>
          <p>Full-Stack Developer</p>
        </div>
        <div className="spec-item">
          <h4>Stack</h4>
          <p>React, Python (Flask), PostgreSQL</p>
        </div>
        <div className="spec-item">
          <h4>Timeline</h4>
          <p>Fall 2025 - December 2025</p>
        </div>
      </div>

      {/* 3. THE PROBLEM */}
      <section className="cs-section">
        <h2>The Challenge</h2>
        <p>
          Course information for the computer science department is spread across different sources and databases. This led to various
          issues:
          
        </p>
        <ul>
            <li><strong>Data Fragmentation:</strong> No single source of truth for which classes were running, per semester.</li>
            <li><strong>Version Conflicts:</strong> Outdated course information on certain sources created conflicting information, causing
            students to be confused when scheduling classes and potentially falling behind on courseload.</li>
            <li><strong>Lack of Transparency:</strong> Students and faculty had no real-time view of the curriculum changes.</li>
        </ul>
      </section>

      {/* 4. THE SOLUTION (High Level) */}
      <section className="cs-section">
        <h2>The Solution</h2>
        <p>
            We built a responsive web dashboard that acts as a "Singe Source of Truth" for the department. 
            It allows admins to edit course data in real-time, while automatically checking for information conflicts, updated
            coursework and syllabi, and prerequisite errors.
        </p>
        
        {/* Main Hero Image */}
        <div className="image-full">
            {dashboardUI ? (
               <img src={dashboardUI} alt="uniSource Main Dashboard Interface" />
            ) : (
               <div className="placeholder-box">
                  Dashboard UI Screenshot Placeholder
               </div>
            )}
            <p className="caption">The centralized dashboard view for Admins.</p>
        </div>
      </section>

      {/* --- 5. TECHNICAL ARCHITECTURE (UPDATED) --- */}
      <section className="cs-section">
        <h2>System Architecture & Data Pipeline</h2>
        <p>
           One of the biggest technical hurdles was syncing data from legacy university systems (ARGOS/CIM) without creating duplicates or overriding manual changes.
           We designed a hashing-based synchronization pipeline to handle this.
        </p>

        {/* The Architecture Diagram */}
        <div className="image-full">
           <img 
             src={archDiagram} 
             alt="uniSource System Architecture Diagram" 
             style={{ border: '1px solid #eee' }} // Optional border if the image has a white background
           />
           <p className="caption">
             The full data pipeline: From external CSV ingestion to Hashing Logic, Database storage, and Iframe deployment.
           </p>
        </div>

        {/* Explaining the Logic inside the Diagram */}
        <div style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontFamily: 'Mukta, sans-serif' }}>
              The "Diffing" Logic
            </h3>
            <p>
              As detailed in the center of the diagram above, I implemented a logic layer to ensure efficient database updates:
            </p>
            <ul style={{ lineHeight: '1.8', color: '#444' }}>
                <li><strong>Ingestion:</strong> The system parses raw CSVs exported from external registrar tools (ARGOS).</li>
                <li><strong>Hashing Algorithm:</strong> Instead of wiping the database every update, the system generates a hash for every incoming course row based on its semester and primary key (CRN).</li>
                <li><strong>Differential Updates:</strong> The system compares the new hash against the existing database hash. If they differ (<code>hash != old</code>), only <em>then</em> do we update the record. This preserves data integrity and improves performance.</li>
                <li><strong>Iframe Injection:</strong> Finally, the system generates static HTML fragments that are injected into the university's Drupal website via Iframes, ensuring the public-facing site is always in sync with our database.</li>
            </ul>
        </div>
      </section>

      {/* --- 5.5 HTML FRAGMENTATION (NEW SECTION) --- */}
      <section className="cs-section">
        <h2>Public-Facing Integration: HTML Fragmentation</h2>
        <p>
          The University's engineering website runs on a strict Drupal CMS that limits external database connections. 
          To display our live data without rebuilding their site, I implemented an HTML Fragmentation strategy.
        </p>
        <p>
          Using Jinja2 templating, our backend generates a static, styled HTML fragment of the course list every time the database updates. 
          This fragment is then injected into the university's page via an Iframe, ensuring students always see real-time data with zero latency.
        </p>

        <div className="image-full">
           <img 
             src={publicFragmentUI} 
             alt="Public Course Search Interface" 
             style={{ border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
           />
           <p className="caption">
             The resulting interface: A generated HTML fragment embedded within the university portal, allowing students to search live course data.
           </p>
        </div>
      </section>

      {/* --- 6. DATABASE DESIGN (Keep this if you have a distinct ERD image, otherwise remove) --- */}
      <section className="cs-section">
         <h2>Data Modeling</h2>
         <p>
           Designing the schema was critical to handle edge cases like "Special Topics" courses 
           that change titles every semester, while keeping "Core Courses" static.
         </p>
         
         <div className="image-full">
           {schemaDiagram ? (
              <img src={schemaDiagram} alt="Database Schema Diagram" />
           ) : (
              // You can remove this placeholder block if you don't have a second diagram
              <div className="placeholder-box">
                 Database Schema / ER Diagram Placeholder
              </div>
           )}
           <p className="caption">Entity Relationship Diagram (ERD) of the curriculum database.</p>
         </div>
      </section>

      {/* --- 7. REFLECTION --- */}
      <section className="cs-section">
        <h2>Key Takeaways</h2>
        <p>
            This project taught me that software architecture is political.
            Building the tool was easy, but careful coordination between several administrators,
            departments, professors, and even my own teammates proved to be the real challenge.
        </p>
        <p>
            Technical highlights included writing custom data-scraping capabilities to receive one source 
            of information, receiving CSV information from ARGOS and CIM, creating Jinja templating
            for html fragmentation to be dsiplayed on an external iframe, and re-structuring of the 
            pre-existing database.
        </p>
      </section>

      {/* --- FOOTER --- */}
      <div className="case-study-footer">
        <Link to="/work" className="back-link">← Back to Selected Work</Link>
      </div>

    </div>
  );
};

export default UniSource;