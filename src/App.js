import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import CreatePostPage from './pages/CreatePostPage';
import AuthPage from './pages/AuthPage';
import DataStructuresAndSortingBlog from './pages/DataStructuresAndSortingBlog';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route 
          path="/blog/data-structures-sorting" 
          element={<DataStructuresAndSortingBlog />} 
        />
      </Routes>
    </div>
  );
}

export default App;