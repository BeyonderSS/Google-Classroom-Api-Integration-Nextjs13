// src/utils/oauth-helper 
import { OAuth2Client } from 'google-auth-library';

const getClient = () => {
  return new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );
};


export const getAuthUrl = (redirectUrl) => {
  const client = getClient();
  const authUrl = client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/classroom.courses.readonly'],
    state: redirectUrl, // Pass the redirect URL as the state parameter
  });

  return authUrl;
};