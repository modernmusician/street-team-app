import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  useParams,
} from 'react-router-dom';

import { Login } from './Components/Login';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { Hello } from './Features/Admin/Hello';

//<AmplifySignOut /> needs to be in some kind of footer thing. -SG

function App() {
  //note -- to add a new secure path, the route needs to be added in AuthenticatedApp.js router
  return (
    <Router>
      <PrivateRoute path="/secure/:userRole">
        {/* <ProtectedPage /> */}
        {/* <CreateActionPage /> */}
        <div>Sup dude</div>
      </PrivateRoute>
      <Login path="/login/:userRole" />
      <Hello path="/hello" />
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  //set up amplify library to handle auth
  const [authState, setAuthState] = React.useState();
  const [userId, setUserId] = React.useState();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUserId(authData);
    });
  }, []);

  let { userRole } = useParams();
  console.log(userRole);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authState === AuthState.SignedIn && userId ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: `/login/artist`,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App;
