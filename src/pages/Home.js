import React from 'react';
import {Jumbotron,Card,Row,Button} from 'react-bootstrap';
import { useSelector,useDispatch} from 'react-redux';
import { NavLink as Link } from 'react-router-dom';
import { deleteResume } from '../slicers/resumeSlice';
import Alert from '../components/Alert'

const Home = () => {
  const [alert, setAlert] = React.useState({type:"",msg:"",show:""});

  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume.value);

  function deleteThis(i){
    console.log(i)
    dispatch(deleteResume(i))
    setAlert({type:"danger",msg:"Resume Deleted",show:true})
  }

  console.log("home",resume)
  return (
    <>
      <Alert toggler={[alert, setAlert]} />
    <Jumbotron>
      <h1 className="header text-center">Welcome To Resume Builder</h1>
    </Jumbotron>
    <Row key={Object.entries(resume).length}>
    {Object.entries(resume).length > 0 ? Object.entries(resume).map(([key,value])=>{
      return  (
        <Card className="mx-3 my-2 w-100 p-2">
        <div className='d-flex justify-content-between align-items-center'>
          <h5>
          {value.name}
          </h5>

          <div>
            <Button variant="danger" className="mr-2" onClick={()=>deleteThis(key)}>Delete </Button>
            <Button as={Link}  to={"/View/"+key} variant="secondary" className="mr-2" >View </Button>
            <Button as={Link}  to={"/Edit/"+key} className="mr-2">Edit </Button>
          </div>
         
        </div >
      </Card>
      )
    }) : (
      <Card className="mx-3 my-2 w-100 p-2">You Have Not created any Resume</Card>
    )}

      <Button className="mx-3 my-2 w-100 p-2" as={Link}  to={"/New"} >Create New </Button>
    </Row>
   
    </>
  );
};

export default Home;
