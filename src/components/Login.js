import React from 'react';
import { getAuthUrl } from '../utils/oauth-helper';

const Login = () => {
  const authUrl = getAuthUrl();

  return (
    <div>
      <h1>Login</h1>
      <a href={authUrl}>Login with Google</a>
    </div>
  );
};

export default Login;
