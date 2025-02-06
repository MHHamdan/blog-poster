import React from 'react';

const CreatePostPage = () => {
  return (
    <div className="create-post-page">
      <h1>Create a New Blog Post</h1>
      <form>
        <input 
          type="text" 
          placeholder="Post Title" 
          name="title"
        />
        <textarea 
          placeholder="Write your post content here..." 
          name="content"
        ></textarea>
        <button type="submit">Publish Post</button>
      </form>
    </div>
  );
};

export default CreatePostPage;