import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SecureViewWrapper } from './Components/SecureViewWrapper';
import { ActionPage } from './Features/Enduser/ActionPage/views/ActionPage';
// import { Hello as HelloAdmin } from './Features/Admin/Hello.jsx';
import { Hello as HelloEnduser } from './Features/Enduser/Hello';

// <AmplifySignOut /> needs to be in some kind of footer thing. -SG

function App() {
  // note -- to add a new secure path, the route needs to be added in AuthenticatedApp.js router
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <SecureViewWrapper userRole="admin">
            <ActionPage path="/:artist" />
            {/* <HelloAdmin path="/hi" /> */}
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
