import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useImmerReducer} from 'use-immer';
// Pages
import HomeLoggedIn from './Pages/HomeLoggedIn';
import HomeLoggedOut from './Pages/HomeLoggedOut';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import LogInSuccess from './Pages/LogInSuccess';
import Claims from './Pages/Claims';

// Context Imports
import StateContext from './Contexts/StateContext';
import DispatchContext from './Contexts/DispatchContext';

// Compontents
import NavigationBar from './Components/Header';
import {ProtectedRoute} from './Components/ProtectedRoute';

function App() {
  const initialState = {
    user: {},
    claims: {},
    loggedIn: false,
  };
  function reducer(draft, action) {
    switch (action.type) {
      case 'LOGIN':
        draft.loggedIn = true;
        draft.user = action.user;
        return;
      case 'LOGOUT':
        draft.loggedIn = false;
        window.location.href = '/login';
        return;

      case 'UPDATE_CLAIMS':
        draft.claims = action.claims;
        return;

      default:
        return;
    }
  }
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  setInterval(() => {
    console.log(state.loggedIn);
  }, 1000);

  return (
    <div className="App" style={{height: '100vh'}}>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <Router>
            <NavigationBar />
            <Routes>
              <Route
                exact
                path="/"
                element={state.loggedIn ? <HomeLoggedIn /> : <HomeLoggedOut />}
              />
              <Route
                exact
                path={`/${state.user.username}/claims`}
                element={<Claims />}
              />

              <Route exact path="/login/success" element={<LogInSuccess />} />
              <Route exact path="/login" element={<LogIn />} />

              <Route exact path="/sign-up" element={<SignUp />} />
            </Routes>
          </Router>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </div>
  );
}

export default App;
