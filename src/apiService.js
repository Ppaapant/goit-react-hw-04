
import axios from 'axios';

const ACCESS_KEY = 'tU055obFs00XuS1fRfXpAIqNTpBZagV7IguJijYNxMs';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
  client_id: ACCESS_KEY,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`/search/photos`, { params: { query, page } });
  return {
    photos: data.results || [], 
    per_page: 15,
    total_results: data.total || 0,
  };
};



