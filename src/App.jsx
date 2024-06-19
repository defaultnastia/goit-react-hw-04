import { useEffect, useState } from "react";
import { noImagesToast, oopsToast, sameKeyToast } from "./service/toasts.js";
import { Toaster } from "react-hot-toast";
import { fetchUnsplashPhotos } from "./service/photosUnsplashAPI.js";

import SearchBar from "./components/SearchBar/SearchBar";
import Gallery from "./components/Gallery/Gallery";
import LoadMoreButton from "./components/LoadMoreButton/LoadMoreButton";
import ImageModal from "./components/ImageModal/ImageModal";
import Message from "./components/Message/Message";
import Loader from "./components/Loader/Loader.jsx";

const App = () => {
  const [key, setKey] = useState("");
  const [images, setImages] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  const handleSearch = (keyword) => {
    if (keyword === key) {
      sameKeyToast(key);
      return;
    }
    setKey(keyword);
    setImages([]);
    setPage(1);
    setLoadMore(false);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleImageClick = (image) => {
    setModalData(image);
  };

  const closeModal = () => {
    setModalData(null);
  };

  useEffect(() => {
    if (!key) return;
    const getImages = async () => {
      setLoader(true);
      try {
        const { results, total, total_pages } = await fetchUnsplashPhotos(
          key,
          page
        );
        if (!total) {
          noImagesToast(key);
          return;
        }
        setImages((prev) => [...prev, ...results]);
        setLoadMore(page < total_pages);
      } catch (error) {
        oopsToast();
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    getImages();
  }, [key, page]);

  return (
    <div className="pb-10" id="appElement">
      <div>
        <Toaster />
      </div>
      <SearchBar handleSearch={handleSearch} />
      {images.length ? (
        <Gallery images={images} handleImageClick={handleImageClick} />
      ) : loader ? (
        <Message message="Please wait..." />
      ) : error ? (
        <Message
          message={`Error was encountered: ${error}. Please reload the page or contact support.`}
        ></Message>
      ) : (
        <Message message="Start search to display images" />
      )}
      {loadMore && <LoadMoreButton handleLoadMore={handleLoadMore} />}
      <ImageModal
        isOpen={!!modalData}
        image={modalData}
        closeModal={closeModal}
      />
      {loader && <Loader />}
    </div>
  );
};

export default App;
