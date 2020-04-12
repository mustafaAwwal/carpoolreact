import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {MainTemplate} from './templates'
import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route path = '/'>
          <MainTemplate />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
