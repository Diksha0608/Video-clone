import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export const fetchApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
}