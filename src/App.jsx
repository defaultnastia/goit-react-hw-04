import SearchBar from "./components/SearchBar/SearchBar";
import Gallery from "./components/Gallery/Gallery";
import { useEffect, useState } from "react";
import { fetchPhotos } from "./service/photosAPI";
import LoadMoreButton from "./components/LoadMoreButton/LoadMoreButton";
import ImageModal from "./components/ImageModal/ImageModal";
import Message from "./components/Message/Message";
import { Toaster } from "react-hot-toast";
import { noImagesToast, oopsToast, sameKeyToast } from "./service/toasts.js";
import Loader from "./components/Loader/Loader.jsx";

const App = () => {
  const [key, setKey] = useState("");
  const [images, setImages] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  const closeModal = () => {
    setModalData(null);
  };

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

  useEffect(() => {
    if (!key) return;
    const getImages = async () => {
      setLoader(true);
      try {
        const { photos, total_results, per_page } = await fetchPhotos(
          key,
          page
        );
        if (!total_results) {
          noImagesToast(key);
          return;
        }
        setImages((prev) => [...prev, ...photos]);
        setLoadMore(page < Math.ceil(total_results / per_page));
      } catch (error) {
        console.log(error.message);
        setError(error.message);
        oopsToast();
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
