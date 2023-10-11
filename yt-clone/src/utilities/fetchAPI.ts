import axios from 'axios';

const BASE_API_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: BASE_API_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.REACT_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchAPI = async (url: string) => {
    const { data } = await axios.get(`${BASE_API_URL}/${url}`, options);

    return data;
}