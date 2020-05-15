import React, { useState } from 'react';

// Think of this object as a tunnel/pipe
// Responsible to passing data to other components
const BlogContext = React.createContext();

// What is {children}?
// More or less other components that are being passed

// Also notice that we're not doing
// 'export const default'
// We are using what is called a Named Export
export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  // Because the BlogProvider is showing every other component, the entire application will be rerendered
  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}` },
    ]);
  };

  // What will be passed to the components that call the BlogContext
  const value = {
    data: blogPosts,
    addBlogPost: addBlogPost,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export default BlogContext;
