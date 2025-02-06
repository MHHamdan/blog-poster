// Import necessary React and routing dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Define a functional component for navigation
const Navigation = () => {
  return (
    // Create a semantic <nav> element
    <nav>
      {/* Unordered list for navigation links */}
      <ul>
        {/* Each list item is a link to a different page */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/create-post">Create Post</Link></li>
        <li><Link to="/auth">Login/Register</Link></li>
        <li><Link to="/blog/data-structures-sorting">Data Structures Guide</Link></li>
      </ul>
    </nav>
  );
};

// Export the component so it can be used in other parts of the application
export default Navigation;