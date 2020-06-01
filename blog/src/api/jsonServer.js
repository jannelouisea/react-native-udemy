import axios from 'axios';

export default axios.create({
  // Remember this URL is only valid for 8 hours!
  baseURL: 'http://15d95be0187c.ngrok.io',
});
