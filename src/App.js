import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
        <Navbar bg="light" variant="light" fixed="top">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Ryan's Receipts
          </Navbar.Brand>
        </Navbar>
          <br />
          <Link to="/"><img src="ryansreceipts.PNG" alt="Ryan's Receipt Logo" /></Link>
        </header>
        <Home className='container'/>
      </div>
    </Router>
  )
}

export default App;