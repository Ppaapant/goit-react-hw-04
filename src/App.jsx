import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar";
import "./App.css";
import { getPhotos } from "./apiService";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import ImageGallery from "./components/imageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn";
import ImageModal from "./components/ImageModal";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Стан для модального вікна

  useEffect(() => {
    if (!query) return;

    const fetchPhotos = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { photos, per_page, total_results } = await getPhotos(query, page);

        if (!photos || photos.length === 0) {
          setIsEmpty(true);
          return;
        }

        setImages((prevImages) => [...prevImages, ...photos]);
        setIsVisible(page < Math.ceil(total_results / per_page));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, [page, query]);

  // Функція для обробки пошуку
  const getQuery = (inputValue) => {
    setQuery(inputValue);
    setImages([]);
    setPage(1);
    setIsEmpty(false);
  };

  // Функція для завантаження додаткових зображень
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Функції для відкриття/закриття модального вікна
  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={getQuery} />
      {isEmpty && <p>No images found. Try another search!</p>}
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {isVisible && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </>
  );
};

export default App;
