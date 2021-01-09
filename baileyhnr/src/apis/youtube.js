import axios from 'axios';

const KEY = 'AIzaSyAKyl4xreuhdicE5c9H5o-42tnfikY2CRw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 16,
    key: KEY,
  },
});