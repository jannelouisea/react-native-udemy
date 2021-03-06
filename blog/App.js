// Whenever you want to use JSX in a file
// you have to import React
import React from 'react';

// Navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

// Providers
import { Provider as BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator(
  {
    // Route configuration object
    // This lists out all the possible screens a user can navigate to
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
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
  // So in the context of BlogProvider... <App /> is what {children} will be
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
