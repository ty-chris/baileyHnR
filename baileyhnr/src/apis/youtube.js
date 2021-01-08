import axios from 'axios';

const KEY = 'AIzaSyCyCjJUdutcJtTj31xBae7HkqwCozpTK1k';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY,
  },
});