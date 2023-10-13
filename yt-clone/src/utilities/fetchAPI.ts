import axios from 'axios';
import urlJoin from 'url-join';

const BASE_API_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: BASE_API_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '93f5b9949fmshf32f0a830e4470ap184110jsnbb042ab08ff0',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchAPI = async (url: any) => {
    const apiUrl = urlJoin(BASE_API_URL, url)
    const { data } = await axios.get(apiUrl, options);

    return data;
}