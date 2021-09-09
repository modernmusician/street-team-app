import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SecureViewWrapper } from './Components/SecureViewWrapper';
import { ActionPage } from './Features/Enduser/Actions/views/ActionPage';
import { LandingPage } from './Features/Enduser/Actions/views/LandingPage';
import { CreateActionPage } from './Features/Admin/CreateActions/views/CreateActionPage';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin/create-action-page">
          <SecureViewWrapper userRole="admin">
            <CreateActionPage />
          </SecureViewWrapper>
        </Route>
        <Route path="/secure/:artist/:page?">
          <SecureViewWrapper userRole="enduser">
            <ActionPage />
          </SecureViewWrapper>
        </Route>
        <Route path="/:artist/:page?">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
};
