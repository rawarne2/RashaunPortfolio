import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Bio from './components/Bio'
import Footer from './components/Footer'
import Projects from './components/Projects'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Bio />
        <Projects /> 
        <Footer />
      </div>
    );
  }
}

export default App;
