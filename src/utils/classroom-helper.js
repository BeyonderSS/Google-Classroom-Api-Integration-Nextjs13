// src/utils/classroom-helper.js

import { google } from 'googleapis';

export const getClassroomClient = (credentials) => {
  const auth = new google.auth.OAuth2();
  auth.setCredentials(credentials);
  return google.classroom({ version: 'v1', auth });
};
