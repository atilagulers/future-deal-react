import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Nav, Button} from 'react-bootstrap';

function HeaderLoggedOut() {
  const navigate = useNavigate();

  return (
    <Nav>
      <Button
        variant="link"
        className="me-3"
        style={{color: 'white', textDecoration: 'none'}}
        onClick={(e) => navigate('/login')}
      >
        Log in
      </Button>

      <Button variant="outline-primary" onClick={(e) => navigate('/sign-up')}>
        Sign Up
      </Button>
    </Nav>
  );
}

export default HeaderLoggedOut;
