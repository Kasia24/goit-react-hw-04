import React, { useState, useEffect } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn";
import ImageModal from "./components/ImageModal";

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "M7W80Z3OiZOdW8N73oLEE-hwTeFhqvYXu5FSMNfIxtM";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(API_URL, {
          params: { query, page, per_page: 12 },
          headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
        });
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch (err) {
        setError("Error fetching images. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const loadMoreImages = () => setPage((prevPage) => prevPage + 1);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="app">
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default App;
