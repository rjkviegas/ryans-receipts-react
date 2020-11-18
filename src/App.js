import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import Receipt from './components/Receipt';
import './App.css';
import Logo from './components/Logo';
import ExampleJSON from './components/ExampleJSON.';

function App() {
  const {register, handleSubmit} = useForm();
  const [data, setData] = useState()

  useEffect(() => {
    document.title = "Ryan's Receipts"
  }, []);

  const onSubmit = (formData) => {
    const jsonObj = JSON.parse(formData.receipt)
    fetch('https://api.ryansreceipts.com/makereceipt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonObj)
    })
      .then(response => response.json())
      .then(setData)
      .catch(console.error)
  }

  if (data) {
    return (
      <div className="App">
        <Receipt receipt={data.receipt} />
      </div>
    )
  }
  return (
    <div className="App">
      <Logo />
      <br />
      Welcome to Ryan's Receipts, a website that uses an receipt generating API to produce a receipt.
      <br />
      Please submit a menu and order in the JSON format that can be seen below. 
      <br />
      <br />
    <div className="grid-container">
    <div className="float-child">
      <ExampleJSON />
    </div>
    <div className="float-child">
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea placeholder="Menu and Order JSON" name="receipt" ref={register} rows="40" cols="50"/>
        <br />
        <button>Submit</button>
      </form>
    </div>
    </div>
    
    
    </div>
  )
}

export default App;
