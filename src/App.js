import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';

// Compontents
import NavigationBar from './Components/Header';

function App() {
  return (
    <div className="App" style={{height: '100vh'}}>
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign-in" element={<SignIn />} />

          <Route exact path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
