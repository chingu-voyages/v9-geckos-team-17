import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
// import LandingPage from "./pages/LandingPage";
// import Boards from "./pages/Boards";
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <LandingPage />
    </div>

    /* <Router>
      <div>
        <Navbar fixed="top" />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/boards" component={Boards} />
        </Switch>
      </div>
    </Router> */
  );
}

export default App;
