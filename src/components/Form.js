import React, { useState } from 'react';
import { Form, Col, InputGroup, Button, Card } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import WithFieldRepeater from './HOC/FieldReapeter';
import TagInput from './TagInput';
import EducationSection from './Form_education';
import ExperienceSection from './Form_experience';
import { useSelector, useDispatch } from 'react-redux';
import { addResume } from '../slicers/resumeSlice';
import Alert from './Alert'

const initValue = {
  name: '',
  education: [{ institute: '',degree: '', year: '' }],
  experience: [
    {
      company: '',
      designation: '',
      year: ''
    },
  ],
  skills: [],
  email: '',
  phone: '',
  address: '',
};
function FormExample({id}) {
  
  const [validated, setValidated] = useState(false);
  const [field, setField] = useState(initValue);
  const history = useHistory();
  const dispatch = useDispatch();

  const [alert, setAlert] = React.useState({type:"",msg:"",show:""});

  const resume = useSelector((state) => state.resume.value);
  console.log(resume);

 

  React.useEffect((_) => {
    if (id != undefined) {
      console.log('form', resume[id]);
      if (resume[id]) {
        const resumeData = JSON.stringify(resume[id]);

        setField(JSON.parse(resumeData));
      }
    }else{
      setField(initValue);
      setValidated(false)
      setAlert({type:"",msg:"",show:""})
    }
  }, [id]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(name);

    if (name.includes('rep')) {
      let [type, sec, name_i, idx] = name.split('_');

      let currField = JSON.stringify(field[sec]);
      var section = JSON.parse(currField);
      console.log(field[sec][idx]);

      let newObj = { ...field[sec][idx], [name_i]: value };
      console.log(section, newObj);
      section[idx] = newObj;
      setField((prev) => ({ ...prev, [sec]: section }));
    } else {
      setField((prev) => ({ ...prev, [name]: value }));
    }
  };


  React.useState(_=>{

  },)


  function startSubmission(form){
    let x = form.querySelectorAll('.was-validated :invalid~.invalid-feedback')
    console.log("check",x)
    if(x.length > 0){
      console.log("in",x)
      setAlert({type:"danger",msg:"Please Check all Mandatory Fields",show:"true"})
    }else{

      console.log("in else",x)
      let formid =
      id == undefined ? parseInt(Math.random() * 1000).toString() : id;

      dispatch(addResume({ id: formid, data: field }));
      
      let alMsg =
        id == undefined ? 'Created' : 'Updated';

      setAlert({type:"success",msg:"Resume "+alMsg+" successfully",show:"true"})
      // setFormId(formid);
      history.push('/Edit/' + formid);
    }
  }
  const handleSubmit = async (event) => {
   
    const form = event.currentTarget;
    console.log("onSubmit",form)

    
  
    if (form.checkValidity()===false ) {
      event.preventDefault();


      setTimeout(_=>startSubmission(form),1000)
      
      
     
      
      event.stopPropagation();
   

     
    }


    setValidated(true);
  };

  return (
    <>
    <Alert toggler={[alert, setAlert]} />

    <div className="row">

      <div className="col-md-12">
        <Form noValidate validated={validated}  onSubmit={handleSubmit}>
          <Form.Row>
            <Col md={12} className="mb-4">
              <strong> Personal Detail</strong>
            </Col>
            <Form.Group as={Col} md="4" controlId="validationName">
              <Form.Label>First name </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                name="name"
                value={field.name}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Enter Your Name
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Email"
                name="email"
                value={field['email']}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Enter Valid Email Id
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationPhone">
              <Form.Label>Mobile</Form.Label>

              <Form.Control
                type="tel"
                placeholder="Phone"
                pattern="^\d{10}$"
                name="phone"
                value={field['phone']}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid Phone number
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                required
                name="address"
                value={field['address']}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please Enter your Address
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Accordion defaultActiveKey="0" className={'mb-4'}>
            <Card className="mb-4">
              <Accordion.Toggle as={Card.Header} variant="p" eventKey="0">
                <strong>My Education</strong>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="0">
                {WithFieldRepeater(
                  EducationSection,
                  field,
                  setField,
                  handleChange,
                  'education'
                )}
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} variant="p" eventKey="1">
                <strong> My Experience</strong>
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="1">
                {WithFieldRepeater(
                  ExperienceSection,
                  field,
                  setField,
                  handleChange,
                  'experience'
                )}
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <TagInput
            key={field['skills']}
            setField={setField}
            fields={field}
            sec_name="skills"
          />
          <Button type="submit" className="float-right">
           {id == undefined ? 'Build' : 'Update'} Resume
          </Button>
        </Form>
      </div>
      {/* <pre>{JSON.stringify(field, null, 4)}</pre> */}
    </div>
    </>
  );
}

export default FormExample;
