import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {MainTemplate} from './templates'
import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';
import Notification from './sections/notification/notification'
function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route path = '/'>
              <MainTemplate />
            </Route>
          </Switch>
        </Router>
        <Notification />
    </div>

  );
}

export default App;
