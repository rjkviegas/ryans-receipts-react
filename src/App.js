import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/"><img src="ryansreceipts.PNG" alt="Ryan's Receipt Logo" /></Link>
        </header>
        <Home className='container'/>
      </div>
    </Router>
  )
}

export default App;