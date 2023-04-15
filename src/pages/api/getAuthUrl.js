// src/pages/api/getAuthUrl.js

import { getAuthUrl } from '../../utils/oauth-helper';

export default async function handler(req, res) {
  const redirectUrl = req.headers.referer; // Get the current URL as the redirect URL
  const authUrl = getAuthUrl(redirectUrl);
  res.status(200).json({ authUrl });
}
