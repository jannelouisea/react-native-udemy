import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Entypo } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const blogPostId = navigation.getParam('id');

  const { data } = useContext(BlogContext);

  const blogPost = data.find((blogPost) => blogPost.id === blogPostId);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

// This object is useful if we want to add customiation to the header on a screen
// This function receives the same props passed into out screen component
ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    // Directly assigning it to some JSX is deprecated
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <Entypo name="pencil" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;
