import axios from "axios";

const apiKey = "cyjoaUmcxdDSQCW0kLUdjoV6zoTr7NI0bWvLOiLZECjQWK4xVNY6pHT6";

export const fetchPhotos = async (query, page) => {
  const pexelsInstance = axios.create({
    baseURL: "https://api.pexels.com/v1/searcheee",
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

//   const result = await axios.get("https://api.pexels.com/v1/search33434", {
//     headers: { Authorization: apiKey },
//     params: {
//       page: page,
//       per_page: 16,
//       query,
//       orientation: "landscape",
//     },
//   });

//   console.log(result);

//   return result.data;
// };

// import axios from "axios";

// const apiKey = "cyjoaUmcxdDSQCW0kLUdjoV6zoTr7NI0bWvLOiLZECjQWK4xVNY6pHT6";

// export const fetchPhotos = async (query, page) => {
//   const pexelsInstance = axios.create({
//     baseURL: "https://api.pexels.com/v1/search",
//     headers: { Authorization: apiKey },
//     params: {
//       page: page,
//       per_page: 16,
//       query,
//       orientation: "landscape",
//     },
//   });
//   const result = await pexelsInstance.get();

//   console.log(result.data);

//   return result.data;
// };
