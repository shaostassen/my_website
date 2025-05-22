// File: src/components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <ProjectCard
        title="Robo Dog"
        description="A DIY quadruped robot dog with precise locomotion control. Designed and built a four-legged robot powered by a Pico W microcontroller. Programmed in C with a web interface, implemented PID control for stability, and added ultrasonic sensing and bark simulation."
        tech="C, Pico W, PID, Servos, WebSockets"
      />

      <ProjectCard
        title="Combat Robotics AI"
        description="Developed AI systems for combat robotics including CNN-based real-time robot tracking, reinforcement learning for attack strategy, and a LangChain-based LLM agent for documentation support."
        tech="Python, PyTorch, OpenCV, RL, LangChain, AWS"
      />
    </section>
  );
}

export default Projects;