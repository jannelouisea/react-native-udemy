// Goal show a list of blog posts to our users
import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { FontAwesome, Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { data, deleteBlogPost, getBlogPosts } = useContext(BlogContext);

  // Call the function within here when the component is FIRST rendered
  useEffect(() => {
    getBlogPosts();

    // Anytime we return this screen, reload the blogposts
    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });

    // Dangling listeners could leave a memory leak!
    // Any function that is returned from useEffect will execute whenever the
    // screen completely stops showing on the screen
    return () => {
      listener.remove();
    };
  }, []);

  // NOTE!! On the TouchableOpacity for the trash button... The call to the delete function
  // must be wrapped by an anonymous function. Otherwise it will be executed as soon as the item
  // renders
  //
  // onPress={addBlogPost} is the same as onPress={() => addBlogPost()}
  return (
    <FlatList
      data={data}
      keyExtractor={(blogPost) => blogPost.title}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('Show', { id: item.id })}
          >
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <FontAwesome style={styles.icon} name="trash" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

// This object is useful if we want to add customiation to the header on a screen
// This function receives the same props passed into out screen component
IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    // Directly assigning it to some JSX is deprecated
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
