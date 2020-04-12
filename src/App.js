import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {MainTemplate, UserTemplate} from './templates'
import Loader from './widgets/loader/loader'
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
            <Route path = '/user'>
              <UserTemplate />
            </Route>
            <Route path = '/'>
              <MainTemplate />
            </Route>
          </Switch>
        </Router>
        <Notification />
        <Loader />
    </div>

  );
}

export default App;
