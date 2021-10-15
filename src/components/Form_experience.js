import React from 'react';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';

const Component = ({ field, handleChange, idx, remover }) => {
  return (
    <>
      <span onClick={() => remover(idx)}>
        <CloseButton />
      </span>
      <Form.Row style={{ clear: 'both' }}>
        <Form.Group as={Col} md="6" controlId="validationCustom4">
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            placeholder="Company "
            required
            name={'rep_experience_company_' + idx}
            value={field['experience'][idx]['company']}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Company Name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom4">
          <Form.Label>Designation</Form.Label>
          <Form.Control
            type="text"
            placeholder="Designation "
            required
            name={'rep_experience_designation_' + idx}
            value={field['experience'][idx]['designation']}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please Enter your Designation 
          </Form.Control.Feedback>
        </Form.Group>
      
        <Form.Group as={Col} md="3" controlId="validationCustom4">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="number"
            min="1900"
            max="2099"
            step="1"
            placeholder="Year "
            required
            name={'rep_experience_year_' + idx}
            value={field['experience'][idx]['year']}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Valid year from 1900 to 2099
          </Form.Control.Feedback>
        </Form.Group>
       </Form.Row>
    </>
  );
};

export default Component;
