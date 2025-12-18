import React from 'react';
import { Link } from 'react-router-dom';
import './SSI.css'; 
import './Sera.css'

// --- REPLACE THESE WITH YOUR ACTUAL SERA ASSETS ---
import dashboardImg from '../assets/seradashboard.png';
import influencerDashboardImg from '../assets/serainfluencerdashboard.png'
// import mobileOnboarding from '../assets/Sera_Mobile.png';
// import analyticsChart from '../assets/Sera_Charts.png';

const Sera = () => {
  return (
    <div className="container page-content">
      
      {/* --- 0. DISCLAIMER --- */}
      <div className="disclaimer-banner" style={{ background: '#f8f9fa', padding: '1rem', borderRadius: '8px', marginBottom: '2rem', borderLeft: '4px solid #666' }}>
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>
          <strong>Note:</strong> This work was completed during a professional internship. Due to non-disclosure agreements regarding proprietary financial algorithms, 
          specific backend logic and sensitive user data have been obfuscated or excluded. The case study below focuses on the Frontend Architecture and UI Components.
        </p>
      </div>

      {/* --- 1. HEADER --- */}
      <header className="case-study-hero">
        <span className="client-name">Sera / San Francisco (Hybrid)</span>
        <h1 className="page-title">Automating Debt Reduction</h1>
        <p className="lead-text">
          A smart budgeting platform that analyzes financial history to automate debt payments. 
          As a Full-Stack Intern, I architected key frontend features to visualize complex financial data for everyday users.
        </p>
      </header>

      {/* --- 2. SPECS GRID --- */}
      <div className="project-specs">
        <div className="spec-item">
          <h4>Role</h4>
          <p>Software Developer Intern</p>
        </div>
        <div className="spec-item">
          <h4>Stack</h4>
          <p>React, TypeScript, Tailwind, Node.js</p>
        </div>
        <div className="spec-item">
          <h4>Timeline</h4>
          <p>May 2025 - Aug 2025</p>
        </div>
      </div>

      {/* --- 3. FULL SCOPE SECTION --- */}
      <div className="scope-section" style={{ marginBottom: '4rem', padding: '2rem', background: '#fff', border: '1px solid #eee', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
        <h3 style={{ marginTop: 0, fontFamily: 'Mukta, sans-serif' }}>Full Scope of Responsibilities</h3>
        <p style={{ marginBottom: '1.5rem' }}>
            My role bridged the gap between complex financial backend logic and a consumer-friendly mobile interface:
        </p>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', paddingLeft: '1.2rem' }}>
            <li><strong>Responsive Frontend:</strong> Developed mobile-first features using React, TypeScript, and Tailwind CSS.</li>
            <li><strong>Data Visualization:</strong> Integrated <em>Recharts</em> to render financial history and debt projections into interactive pie charts.</li>
            <li><strong>Feature Delivery:</strong> Shipped end-to-end features including User Onboarding flows, Influencer Analytics dashboards, and Landing Page redesigns.</li>
            <li><strong>UX Refinement:</strong> Implemented real-time feedback systems, for example, using <em>Sonner</em> (toast notifications) to improve application usability.</li>
            <li><strong>Product Initiative:</strong> Proposed and delivered a new "Interactive Tour" feature to guide users through account setup, improving the initial adoption experience.</li>
        </ul>
      </div>

      <div className="case-study-body">

        {/* --- 2.5 LIVE LINK SECTION (NEW) --- */}
        <div className="link-section" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <a 
            href="https://getsera.io" // REPLACE WITH ACTUAL URL
            target="_blank" 
            rel="noopener noreferrer" 
            className="live-site-btn"
            >
            Visit Live Site ↗
            </a>
        </div>
        
        {/* --- 4. DATA VISUALIZATION --- */}
        <section className="cs-section">
          <h2>Visualizing Financial Health</h2>
          <p>
            One of the core challenges of the platform was making debt reduction feel achievable rather than overwhelming. 
            Raw numbers can be intimidating, so we needed a visual language to represent progress.
          </p>
          <p>
            I implemented Recharts to build dynamic pie charts and data visualizations. 
            These components allowed users to instantly see the breakdown of their automated payments versus their remaining debt.
          </p>
          
          <div className="image-full h-300">
            <img src={dashboardImg}></img>
          </div>
          <p className="caption">The Analytics Dashboard: Visualizing debt distribution and payment history.</p>
        </section>

        {/* --- 5. ONBOARDING & MOBILE FIRST --- */}
        <section className="cs-section">
          <h2>Transition to Responsive Web</h2>
          <p>
            Sera targets a busy demographic often managing debt on the go. This required a strict mobile-first approach. 
            I aided in transforming ~40% of Sera's webapp into a responcive webapp, utilizing Tailwind CSS.
          </p>
        </section>

        {/* --- 6. IMPACT & LANDING PAGE --- */}
        <section className="cs-section">
          <h2>Influencer Analytics & Growth</h2>
          <p>
            Beyond the core product, I contributed to the growth engine by building the Influencer Analytics Dashboard. 
            This internal tool allowed the marketing team to track sign-ups generated by partner influencers.
          </p>
          <p>
            I also handled the technical implementation of the landing page redesigns, optimizing for load speeds 
            and SEO to improve conversion rates for incoming traffic.
          </p>

          <div className="image-full h-300">
            <img src={influencerDashboardImg}></img>
          </div>
          <p className="caption">The Influencer Dashboard: Allowing social media influencers to see their reach and promo code usage.</p>
        </section>
      </div>

      {/* --- 3. PRODUCT STRATEGY (The "Pitch" Section) --- */}
        <section className="cs-section">
          <h2>Product Strategy: Improving User Retention</h2>
          <p>
            While my primary role was technical, I actively engaged in analyzing the product's user experience. 
            I identified a significant friction point where users were dropping off during the complex account setup process.
          </p>
          
          <div style={{ background: '#fcfcfc', border: '1px solid #eee', padding: '2rem', borderRadius: '12px', marginTop: '1.5rem' }}>
            <h4 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.1rem', fontFamily: 'Mukta, sans-serif', textTransform: 'uppercase', letterSpacing: '1px', color: '#333' }}>
              The Proposal
            </h4>
            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1.5rem' }}>
              I researched successful onboarding patterns and pitched an "Interactive Tour" to the leadership team. My proposal focused on breaking the data entry into digestible, guided steps to reduce cognitive load.
            </p>
            
            <ul style={{ paddingLeft: '1.2rem', marginBottom: 0, color: '#444', lineHeight: '1.7' }}>
                <li style={{ marginBottom: '0.8rem' }}>
                  <strong>Problem Identification:</strong> Recognized that asking for sensitive financial data immediately was causing user hesitation.
                </li>
                <li style={{ marginBottom: '0.8rem' }}>
                  <strong>The Solution:</strong> Proposed a "Save Progress" system that allows users to leave the onboarding flow and return later without losing data, addressing the mobile-usage pattern where sessions are often interrupted.
                </li>
                <li>
                  <strong>Business Impact:</strong> Demonstrated proactive product thinking by aligning technical constraints with business goals (increasing user conversion).
                </li>
            </ul>
          </div>
        </section>

        {/* --- 6. ENGINEERING VELOCITY (NEW SECTION) --- */}
        <section className="cs-section">
          <h2>Engineering Velocity & Reliability</h2>
          <p>
            Beyond shipping new features, I maintained a high engineering cadence by stabilizing the existing codebase. 
            I consistently tackled technical debt, averaging one issue resolution per day throughout the internship.
          </p>
          <p>
            This involved diagnosing pre-existing bugs in the legacy code, improving log-in processes and UI based bugs, 
            and ensuring platform stability during high-traffic periods.
          </p>
        </section>

        {/* --- 6. FINAL PRESENTATION (NEW) --- */}
        <section className="cs-section">
          <h2>Conclusion: Final Presentation</h2>
          <p>
            To conclude my internship, I delivered a comprehensive final presentation detailing my technical contributions and product strategy proposals.
          </p>
          <p>
            The session was attended by 100+ stakeholders, including university alumni, aspiring students, startup founders, and industry leaders. 
            Effectively communicating technical concepts to this diverse audience validated not just my engineering work, but my ability to bridge the gap between code and business value.
          </p>
        </section>

      {/* --- FOOTER --- */}
      <div className="case-study-footer">
        <Link to="/work" className="back-link">← Back to Selected Work</Link>
      </div>

    </div>
  );
};

export default Sera;