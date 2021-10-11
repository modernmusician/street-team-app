import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SecureViewWrapper } from './Components/SecureViewWrapper';
import { ActionsView } from './Features/Enduser/Actions/views/ActionsView';
import { LandingPage } from './Features/Enduser/Actions/views/LandingPage';
import { CreateActionPage } from './Features/Admin/CreateActions/views/CreateActionPage';
import { Login } from './Components/Login/Login';
import { Demo } from './Features/Admin/Audience/GetData';
import { AudienceView } from './Features/Admin/Audience/views/AudienceView';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/test">
          <Demo />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        {/* support backwards compatibility (to be removed later on) */}
        <Route path={['/artist/create', '/admin/create-fan-magnet']}>
          <SecureViewWrapper userRole="admin">
            <CreateActionPage type="landing" />
          </SecureViewWrapper>
        </Route>
        <Route
          path={[
            '/admin/create-accelerator',
            '/artist/secure/create-action-page',
          ]}
        >
          <SecureViewWrapper userRole="admin">
            <CreateActionPage type="action" />
          </SecureViewWrapper>
        </Route>

        <Route path="/secure/:artist/audience">
          <SecureViewWrapper userRole="admin">
            <AudienceView />
          </SecureViewWrapper>
        </Route>

        <Route path="/secure/:artist/:page?">
          <SecureViewWrapper userRole="enduser">
            <ActionsView />
          </SecureViewWrapper>
        </Route>
        <Route path="/:artist/:page?">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
};
