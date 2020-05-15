import React from 'react';

// Think of this object as a tunnel/pipe
// Responsible to passing data to other components
const BlogContext = React.createContext();

// What is {children}?
// More or less other components that are being passed

// Also notice that we're not doing
// 'export const default'
// We are using what is called a Named Export
export const BlogProvider = ({ children }) => {
  const blogPosts = [{ title: 'Blog Post #1' }, { title: 'Blog Post #2' }];

  return (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
