import React from 'react';
import Logo from './components/Logo';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        {/* <h1>Ryan's Receipts</h1> */}
        <Logo />
      </header>
      <Home className='container'/>
    </div>
  )
}

export default App;