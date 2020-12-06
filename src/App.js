import React, { Component } from 'react';
import Navigation from "./components/Navigation";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
