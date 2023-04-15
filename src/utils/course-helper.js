// src/utils/course-helper.js

import { getClassroomClient } from './classroom-helper';

export const listCourses = async (credentials) => {
  try {
    // Get the Classroom API client
    const classroom = getClassroomClient(credentials);

    // Call the courses.list method to retrieve the courses
    const response = await classroom.courses.list({
      pageSize: 10, // Maximum number of courses to retrieve per request
      fields: 'courses(id, name)', // Specify the fields to include in the response
    });

    // Extract the courses from the response and return them
    const courses = response.data.courses;
    return courses;
  } catch (error) {
    console.error('Failed to list courses:', error);
    throw error;
  }
};
