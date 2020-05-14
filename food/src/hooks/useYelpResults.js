import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

const defaultSearchTerm = 'pasta';

export default () => {
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (term) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: term,
          location: 'raleigh',
        },
      });
      setSearchResults(response.data.businesses);
    } catch (err) {
      // What are the best practice for error handing in web apps?
      // console.log(err);
      setErrorMessage('Something went wrong.');
    }
  };

  // This section of code is to make sure we have an intial
  // search result run when the app first loads
  useEffect(() => {
    searchApi(defaultSearchTerm);
  }, []);

  return [searchApi, searchResults, errorMessage];
};
