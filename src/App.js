import React, { Component } from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import './App.css';
import data from './data';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header></Header>
        <About></About>
        <Projects data={data}></Projects>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
