import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Receipt from './Receipt';
import ExampleJSON from './ExampleJSON.';
import Description from './Description';

function Home() {
  const {register, handleSubmit} = useForm();
  const [data, setData] = useState()

  const onSubmit = (formData) => {
    try {
      fetch('https://api.ryansreceipts.com/makereceipt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(JSON.parse(formData.receipt))
      })
      .then(res => res.json())
      .then(setData)
    } catch(error) {
      alert('We had a problem processing your menu and order data.\nPlease check the format of your JSON and try again')
      console.error(error)
    }
  }

  if (data) {
    return (
      <div className="container">
        <Receipt receipt={data.receipt} />
      </div>
    )
  }

  return (
    <div>
      <Description />
        <div className="grid-container">
          <div className="float-child">
            <ExampleJSON />
          </div>
          <div className="float-child">
            <h4>Menu and Order JSON Form</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <button>Submit</button>
                <br />
                <textarea placeholder="Menu and Order JSON" name="receipt" ref={register} rows="30" cols="50"/>
                <br />
            </form>
          </div>
        </div>
    </div>
  )
}

export default Home;
