import React, { useContext } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const blogPostId = navigation.getParam('id');
  console.log(`EDIT blogPostId ${blogPostId}`);

  const { data, editBlogPost } = useContext(BlogContext);

  const blogPost = data.find((blogPost) => blogPost.id === blogPostId);
  console.log(`EDIT blogPost ${blogPost}`);

  return (
    // NOTE: the props have to be in the SAME ORDER as stated in the component
    <BlogPostForm
      onSubmit={(title, content) => {
        editBlogPost(
          blogPostId,
          title,
          content,
          () => navigation.pop() // navigation.pop() redirects the user to the screen they were
          // previously on
        );
      }}
      initialBlogPost={blogPost}
    />
  );
};

export default EditScreen;
