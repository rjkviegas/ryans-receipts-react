import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Receipt from './components/Receipt';
import './App.css';

function App() {
  const {register, handleSubmit} = useForm();
  const [data, setData] = useState()

  const onSubmit = (formData) => {
    const jsonObj = JSON.parse(formData.receipt)
    fetch('http://3.8.131.158/makereceipt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonObj)
    })
      .then(response => response.json())
      .then(setData)
      .catch(console.error)
  }

  if (data) {
    // console.log(data.receipt)
    return (
      <div className="App">
        <Receipt receipt={data.receipt} />
      </div>
    )
  }
  return (
    <div className="App">
    <img src="ryansreceipts.PNG" alt="logo" />
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea placeholder="Menu and Order JSON" name="receipt" ref={register} rows="25" cols="100"/>
      <br />
      <button>Submit</button>
    </form>
    </div>
  )
}

export default App;
