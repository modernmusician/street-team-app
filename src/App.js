import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Hello as HelloAdmin } from './Features/Admin/Hello';
import { Hello as HelloEnduser } from './Features/Enduser/Hello';
import SecureViewWrapper from './Components/SecureViewWrapper';

//<AmplifySignOut /> needs to be in some kind of footer thing. -SG

function App() {
  //note -- to add a new secure path, the route needs to be added in AuthenticatedApp.js router
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <SecureViewWrapper userRole="admin">
            <HelloAdmin path="/hi" />
          </SecureViewWrapper>
        </Route>
        <Route path="/secure">
          <SecureViewWrapper userRole="enduser">
            <HelloEnduser path="/hi" />
          </SecureViewWrapper>
        </Route>
        <Route path="/">
          <HelloEnduser path="/hi" />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
