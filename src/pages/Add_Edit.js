import React from 'react';
import Form from '../components/Form';
import { useParams, useHistory } from 'react-router-dom';

const Home = () => {

  const { id } = useParams();
  

  return <Form id={id}/>;
};

export default Home;
