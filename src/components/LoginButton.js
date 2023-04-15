// src/components/LoginButton.js

import React from 'react';

const LoginButton = () => {
  const handleClick = async () => {
    try {
      // Fetch the authUrl from the /api/getAuthUrl endpoint
      const response = await fetch('/api/getAuthUrl');
      const { authUrl } = await response.json();

      // Navigate to the authorization URL
      window.location.href = authUrl;
    } catch (error) {
      console.error('Failed to retrieve auth URL:', error);
    }
  };

  return (
    <button onClick={handleClick}>
      Login with Google
    </button>
  );
};

export default LoginButton;
