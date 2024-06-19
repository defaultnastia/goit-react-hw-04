import axios from "axios";

const accessKey = "nUj1r-fPjx2MHz5Cak3QMOMK9UGSwsPaUmXMEHtrwRc";
// const secretKey = "1r1V8CIMJ-IO_jZpHwAXbpnX_CeOFiNFPH-N8OX1SC4";
// const appId = "624252";

export const fetchUnsplashPhotos = async (query, page) => {
  const unsplashInstance = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: { Authorization: `Client-ID ${accessKey}` },
    params: {
      page: page,
      per_page: 16,
      query,
      orientation: "landscape",
    },
  });
  const result = await unsplashInstance.get("/search/photos");

  console.log(result);

  return result.data;
};
