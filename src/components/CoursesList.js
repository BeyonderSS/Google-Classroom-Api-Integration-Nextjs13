// src/components/CoursesList.js

import React, { useEffect, useState } from 'react';

const CoursesList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Fetch the courses from the /api/listCourses endpoint
        const response = await fetch('/api/listCourses');
        const { courses } = await response.json();

        // Update the state with the retrieved courses
        setCourses(courses);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Courses List</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesList;