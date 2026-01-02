import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      <main className="flex-grow-1">
        <Home />
        <hr className="my-0" />
        <Projects />
        <hr className="my-0" />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;