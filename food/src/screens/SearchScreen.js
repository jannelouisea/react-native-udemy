import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useYelpResults from '../hooks/useYelpResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchApi, searchResults, errorMessage] = useYelpResults();

  const filterResultsByPrice = (results, prices) => {
    return results.filter((result) => {
      return prices.includes(result.price);
    });
  };

  return (
    // We are setting the style of the most outside view to the following because we want
    // the view to be as big as the max size of the available screen
    // This way the ScrollView can work properly for phones of smaller sizes
    // and content at the bottom (i.e. the last ResultsList) won't be cut off at the bottom

    // Check out lesson 109 for the empty element tag
    // Use an empty element instead of a view when we want to return a grouping of elements
    <>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchTermSubmit={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice(searchResults, ['$'])}
        />
        <ResultsList
          title="Bit Pricier"
          results={filterResultsByPrice(searchResults, ['$$'])}
        />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice(searchResults, ['$$$', '$$$$'])}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
