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
          <Form.Label>Institute</Form.Label>

          <Form.Control
            type="text"
            placeholder="institute "
            required
            name={'rep_education_institute_' + idx}
            value={field['education'][idx]['institute']}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Institue Name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom4">
          <Form.Label>Degree</Form.Label>
          <Form.Control
            type="text"
            placeholder="Degree "
            required
            name={'rep_education_degree_' + idx}
            value={field['education'][idx]['degree']}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Degree
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
            name={'rep_education_year_' + idx}
            value={field['education'][idx]['year']}
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
