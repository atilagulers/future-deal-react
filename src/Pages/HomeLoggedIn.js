import {useState, useEffect, useContext} from 'react';
import PageWrapper from './PageWrapper';
import StateContext from '../Contexts/StateContext';

function HomeLoggedIn() {
  const appState = useContext(StateContext);

  return (
    <PageWrapper title="Home">
      <h1>Welcome, {appState.user.username}</h1>
    </PageWrapper>
  );
}

export default HomeLoggedIn;
