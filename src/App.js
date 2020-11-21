import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
        <Navbar bg="light" variant="light" fixed="top">
          <Navbar.Brand href="/">
            <img
              alt="Ryan's Receipts Favicon"
              src="favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Ryan's Receipts
          </Navbar.Brand>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Navbar>
          <br />
          <Link to="/"><img src="ryansreceipts.PNG" alt="Ryan's Receipt Logo" /></Link>
        </header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;