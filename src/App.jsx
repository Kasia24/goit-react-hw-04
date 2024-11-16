import axios from "axios";
/*import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import ImageCard from "./components/ImageCard";
import ImageModal from "./components/ImageModal";
import Loader from "./components/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage";*/

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
