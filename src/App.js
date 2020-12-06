import React, { Component } from 'react';
import Navigation from "./components/Navigation";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css';
import data from './data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <About />
        <Projects data={data}></Projects>
        <Contact />
      </div>
    );
  }
}

export default App;
