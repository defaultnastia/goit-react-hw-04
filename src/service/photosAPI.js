import axios from "axios";

const apiKey = "cyjoaUmcxdDSQCW0kLUdjoV6zoTr7NI0bWvLOiLZECjQWK4xVNY6pHT6";

export const fetchPhotos = async (query, page) => {
  const pexelsInstance = axios.create({
    baseURL: "https://api.pexels.com/v1/search",
    headers: { Authorization: apiKey },
    params: {
      page: page,
      per_page: 16,
      query,
      orientation: "landscape",
    },
  });
  const result = await pexelsInstance.get();

  return result.data;
};

// just in case something need to be fixed, this is an alternative API without requests limit

// useEffect(() => {
//   if (!key) return;
//   const getImages = async () => {
//     setLoader(true);
//     try {
//       const { photos, total_results, per_page } = await fetchPhotos(
//         key,
//         page
//       );
//       if (!total_results) {
//         noImagesToast(key);
//         return;
//       }
//       setImages((prev) => [...prev, ...photos]);
//       setLoadMore(page < Math.ceil(total_results / per_page));
//     } catch (error) {
//       oopsToast();
//       setError(error.message);
//     } finally {
//       setLoader(false);
//     }
//   };
//   getImages();
// }, [key, page]);
