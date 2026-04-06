import React from 'react';
import EnrollmentManager from './EnrollmentManager'; // Importing Assignment 2!

const Courses = () => (
  <div className="page-content">
    <h2>Available Courses</h2>
    <p>Select a course below to manage your registration state:</p>
    
    {/* Rendering Assignment 2 inside Assignment 3 */}
    <EnrollmentManager /> 
  </div>
);
export default Courses;