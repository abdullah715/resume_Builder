import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Form, Col, InputGroup, Button, Card,Row} from 'react-bootstrap';
import Table from '../components/Table'
const Home = () => {
  let { id } = useParams();
  let [field, setFields] = useState({});
  let [edu, setEdu] = useState({});
  const resume = useSelector((state) => state.resume.value);

  useEffect((_) => {
    let data = JSON.stringify(resume[id]);
    setFields(JSON.parse(data));
  }, []);

 
  return <div>
    <Row>
      <Col>
      <h4>{field.name}</h4>
      <br></br>
      <p>Phone : {field.phone}</p>
      <p>Email :{field.email}</p>
      <p>Address : {field.address}</p>

      <hr ></hr>

      <h5>Education</h5>
      <Table data={field.education} />


      <h5>Experience</h5>
      <Table data={field.experience} />

      <h5>Skills</h5>
      {field.skills && field.skills.map(_=><Button variant="outline-secondary" className="mr-2" size="sm" >{Object.values(_)[0]}</Button>)}
      
      </Col>
    </Row>
    </div>;
};

export default Home;
