import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/home" component={Home}><Home /></Route>
          <Route path="/about" component={About}><About /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
