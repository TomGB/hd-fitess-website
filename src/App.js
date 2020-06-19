import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from '@reach/router'
import Footer from './components/Footer.js'

import './App.css';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

const App = () => {
  return (
    <Root>
      <header className="menu">
        <div className='logo'></div>
        <nav className='mainMenu'>
          <Link to="/recipes">Recipes</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <div className='cover'>
        <h1 className='catchText'>Fitness Simplified</h1>
        <div className='seperator'></div>
        <p className='subCatchText'>Remote personal training services</p>
      </div>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
      <Footer />
    </Root>
  );
}

export default App;
