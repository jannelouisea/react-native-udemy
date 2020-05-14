// Whenever you want to use JSX in a file
// you have to import React
import React from 'react';

// Navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import IndexScreen from './src/screens/IndexScreen';

const navigator = createStackNavigator(
  {
    // Route configuration object
    // This lists out all the possible screens a user can navigate to
    Index: IndexScreen,
  },
  {
    // Configurations options specifically for the stack navigator
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);

const App = createAppContainer(navigator);

// Custom component
export default () => {
  return <App />;
};
