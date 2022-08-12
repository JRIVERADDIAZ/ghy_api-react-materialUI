
import axios from 'axios';

export const dataGet = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/'
})