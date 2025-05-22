// File: src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Bio />
        <Resume />
        <Projects />
        <Contact />
        <Blog />
      </main>
    </div>
  );
}

export default App;