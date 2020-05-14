import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

// One of the many icon libraries I can use
// import { LibraryName } from ...
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ searchTerm, onSearchTermChange, onSearchTermSubmit }) => {
  return (
    <View style={styles.searchBackground}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={searchTerm}
        autoCapitalize="none"
        autoCorrect={false}
        /* Long way to write this
        onChangeText={(newSearchTerm) => onSearchTermChange(newSearchTerm)}
        onEndEditing={() => onSearchTermSubmit()}*/
        onChangeText={onSearchTermChange}
        onEndEditing={onSearchTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBackground: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
