import axios from 'axios';

export default axios.create({
  // baseURL is the ROOT url you want to access
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 43apFo7SuP2Sc-_EHf8xlxMJFVH-oOrZM0JwF4gsoZcHgJ0x0wYGfzo5iZjprd4fGaF70yQ46o80seln9sdsI7OYzXyyg-mUM2s9Y3q7_Nr_WCeR-1s3pbzDZJShXnYx',
  },
});
