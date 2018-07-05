import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Bio from './components/Bio'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Main from './components/Main'
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Main>
            <Bio />
            <Projects /> 
            <Blog />
          </Main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;


//add pics and links to projects component
//add full bio to about me page
//make it highlight which page youre on. Check NutriYum to see how it's done. Something to do with state?