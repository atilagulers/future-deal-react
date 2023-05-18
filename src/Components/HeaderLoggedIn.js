import React, {useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {Nav, Image, Button} from 'react-bootstrap';
import axios from 'axios';
import StateContext from '../Contexts/StateContext';

function HeaderLoggedIn() {
  const appState = useContext(StateContext);
  const navigate = useNavigate();

  const handleClickLogout = function () {
    window.open(`${process.env.REACT_APP_API}/auth/logout`, '_self');
  };

  return (
    <Nav>
      {/*<Image
        roundedCircle
        src="https://img.icons8.com/color/16/000000/google-logo.png"
        alt="User Avatar"
      />*/}
      <Button onClick={(e) => navigate(`/${appState.user.username}/claims`)}>
        Claims
      </Button>
      <Button onClick={handleClickLogout}>Log Out</Button>
    </Nav>
  );
}

export default HeaderLoggedIn;
