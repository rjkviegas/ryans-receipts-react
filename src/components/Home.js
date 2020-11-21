import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Receipt from './Receipt';
import ExampleJSON from './ExampleJSON.';
import Description from './Description';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  const {register, handleSubmit} = useForm();
  const [data, setData] = useState()

  const onSubmit = formData => {
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

  function resetData() {
    setData(data => undefined);
  }

  if (data) {
    return (
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Receipt receipt={data.receipt} />
              <Button variant="primary" onClick={resetData}>Go back</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Description />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs lg="4">
            <ExampleJSON />
          </Col>
          <Col xs lg="4">
            <h4>Menu and Order JSON Form</h4>
            <form>
              <Button 
                variant="warning"
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </Button>
              <br />
              <textarea 
                placeholder="Menu and Order JSON"
                name="receipt"
                ref={register}
                rows="30" 
                cols="35"
              />
              <br />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;
