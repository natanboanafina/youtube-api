import axios from 'axios';

//será necessário criar uma nova Key para a api YouTube Data API v3 (versão da api que foi usada aqui no projeto)
const KEY = 'AIzaSyC8YFPZxkScmoq7dAB6S7iIxt4GivVWIm0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
