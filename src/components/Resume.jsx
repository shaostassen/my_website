// File: src/components/Resume.jsx
import React from 'react';

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume Highlights</h2>

      <h3>Education</h3>
      <ul>
        <li><strong>Cornell University</strong> – B.S. Computer Science, Minor in ECE & Business (Aug 2022 – May 2026)</li>
        <li><em>Dean's List</em> (5x), GPA: 3.84</li>
      </ul>

      <h3>Research</h3>
      <ul>
        <li><strong>Assistive Robotics Researcher</strong>, EmPRISE Lab (Oct 2024 – Present)</li>
        <li>Building a multi-modal model for patient transfer learning; integrating video demonstrations with other data; evaluating ML performance metrics.</li>
      </ul>

      <h3>Experience</h3>
      <ul>
        <li><strong>Machine Learning Engineer</strong>, Combat Robotics @ Cornell (Sept 2022 – Present)</li>
        <li>Developed a real-time robot tracking system with CNN vision (90%+ success) and reinforcement learning for strategy.</li>
        <li><strong>Data Engineer Intern</strong>, Travelers Insurance (May 2024 – Aug 2024)</li>
        <li>Built a serverless data pipeline (AWS Lambda, Kafka) processing 1M+ records/day, improving efficiency by 20%.</li>
      </ul>

      <p>For more details, check out my <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">full resume</a>.</p>
    </section>
  );
}

export default Resume;