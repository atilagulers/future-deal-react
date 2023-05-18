import React, {useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import StateContext from '../Contexts/StateContext';
import DispatchContext from '../Contexts/DispatchContext';
import axios from 'axios';

function LogInSuccess() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/auth/login/success`,
          {
            withCredentials: true,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Credentials': true,
            },
          }
        );
        const user = response.data.user;
        console.log(user);
        //user.authenticated = true;
        appDispatch({type: 'LOGIN', user});
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.log('Not Auth');
        } else {
          console.log(error);
        }
      } finally {
        navigate('/');
      }
    };
    fetchUser();
  }, []);

  return <h1>Logged In</h1>;
}

export default LogInSuccess;
