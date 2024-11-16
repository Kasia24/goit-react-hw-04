import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn";
import ImageModal from "./components/ImageModal";
import { fetchImages } from "./api";

const App = () => {
  // Stany aplikacji
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Obsługa przesyłania formularza wyszukiwania
  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  // Pobieranie obrazów za każdym razem, gdy zmienia się zapytanie lub strona
  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch (error) {
        setError("Failed to fetch images. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  // Obsługa otwierania okna modalnego
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Obsługa zamykania okna modalnego
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Obsługa ładowania więcej obrazów
  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="app">
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        image={selectedImage}
        onClose={closeModal}
      />
    </div>
  );
};

export default App;
