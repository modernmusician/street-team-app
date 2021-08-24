import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SecureViewWrapper } from './Components/SecureViewWrapper';
import { ActionPage } from './Features/Enduser/ActionPage/views/ActionPage';
import { CreateActionPage } from './Features/Admin/CreateActionPage/views/CreateActionPage';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin/create-action-page">
          <SecureViewWrapper userRole="admin">
            <CreateActionPage />
          </SecureViewWrapper>
        </Route>
        <Route path="/secure/:artist">
          <SecureViewWrapper userRole="enduser">
            <ActionPage />
          </SecureViewWrapper>
        </Route>
        {/* <SecureViewWrapper userRole="enduser">
              <Route component={HelloEnduser} exact path="/hi" />
            </SecureViewWrapper> */}

        <Route path="/">
          <div>Hello</div>
          {/* <HelloEnduser path="/hi" /> */}
        </Route>
      </Switch>
    </Router>
  );
};
