// src/pages/api/listCourses.js

import { listCourses } from "../../utils/course-helper";
import { getClient } from "../../utils/oauth-helper";

export default async function handler(req, res) {
  try {
    // Retrieve the authorization code from the query string
    const { code } = req.query;

    // Exchange the authorization code for an access token
    const client = getClient();
    const { tokens } = await client.getToken(code);
    const { access_token, refresh_token } = tokens;

    // Save the access token and refresh token, e.g., in a session or database
    // Note: You should implement proper security measures to protect the tokens
    const credentials = { access_token, refresh_token };
    req.session.credentials = credentials; // Update this to match your app's session handling

    // Call the listCourses function to retrieve the courses
    const courses = await listCourses(access_token); // Call the listCourses function with the access token

    // Return the list of courses
    res.status(200).json({ courses });
  } catch (error) {
    console.error("Failed to list courses:", error);
    res.status(500).json({ error: "Failed to list courses" });
  }
}
