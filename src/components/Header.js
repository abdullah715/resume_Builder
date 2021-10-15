import React from 'react';
import { Navbar, Nav ,Button} from 'react-bootstrap';
import { NavLink as Link } from 'react-router-dom';
export default function Header({ match }) {
  return (
    <Navbar
      className={'Navbar'}
      bg=""
      variant=""
      style={{ justifyContent: 'space-between' }}
    >
      <Navbar.Brand as={Link} to='/' href="#home" className="text-dark font-weight-bold">Resume Builder</Navbar.Brand>
      <Nav className=" float-right">
         
         <Button as={Link}
         variant="outline-primary"
          exact
          activeClassName={'btn-primary text-light'}
          className={'mr-2'}
          to="/"
         >  Home
          </Button>

          <Button as={Link}
          exact
          variant="outline-primary"
          activeClassName={'btn-primary text-light'}
          className={''}
          to="/New"
         > Create New
          </Button>

        
      </Nav>
    </Navbar>
  );
}
