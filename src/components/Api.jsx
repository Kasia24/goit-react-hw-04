import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "M7W80Z3OiZOdW8N73oLEE-hwTeFhqvYXu5FSMNfIxtM";

export const fetchImages = async (query, page) => {
  const response = await axios.get(API_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};
