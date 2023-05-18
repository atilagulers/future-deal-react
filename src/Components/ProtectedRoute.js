import {useContext, useEffect} from 'react';
import StateContext from '../Contexts/StateContext';
import DispatchContext from '../Contexts/DispatchContext';
import {Navigate} from 'react-router-dom';

export const ProtectedRoute = ({children}) => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  //useEffect(() => {
  //  if (!appState.loggedIn) {
  //    appDispatch({type: 'logout'});
  //  }
  //}, []);

  if (!appState.loggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};
