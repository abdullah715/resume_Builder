import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Add_Edit from './Add_Edit';
import View from './View';
import Home from './Home';
import Header from '../components/Header';



const Main = () => {
  return (
    <Router>
      <Header />
      <Container className="mt-2 mb-4 p-2 content-body shadow p-3">
        <Switch>
        <Route path="/New">
            <Add_Edit />
          </Route>

          <Route path="/Edit/:id">
            <Add_Edit />
          </Route>
          <Route path="/View/:id">
            <View />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
      <p className="text-center">Developed by Abdullah M</p>
      <p className="text-center">+91 9962233222</p>
      <p className="text-center mb-3">m.abdullah715@gmail.com</p>
    </Router>
  );
};

export default Main;
