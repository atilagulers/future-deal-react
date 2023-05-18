import React, {useEffect, useContext} from 'react';
import {Container} from 'react-bootstrap';
import axios from 'axios';
import StateContext from '../Contexts/StateContext';

function Claims() {
  const appState = useContext(StateContext);

  useEffect(() => {
    const getClaim = async function () {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/user/${appState.user._id}/claims`
      );
      console.log(response);
    };
    getClaim();
  }, []);

  return (
    <Container>
      <h1>Claims of {appState.user.username}</h1>
    </Container>
  );
}

export default Claims;
