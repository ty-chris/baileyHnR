import axios from 'axios';

const KEY = 'AIzaSyCKC-HFnbINmL88bZxJM2UMpYBmStUhDrs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 20,
    key: KEY,
  },
});