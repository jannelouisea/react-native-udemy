import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  const blogPostId = navigation.getParam('id');

  const { data } = useContext(BlogContext);

  const blogPost = data.find((blogPost) => blogPost.id === blogPostId);

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
