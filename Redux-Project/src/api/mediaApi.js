import axios from 'axios';

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_API_KEY;


// function fetchUnsplashImages(query, page = 1, perPage = 10) {
//   const url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}`;
//   return axios.get(url, {
//     headers: {
//       Authorization: `Client-ID ${UNSPLASH_KEY}`,
//     },
//   });
// }

async function fetchUnsplashImages(query, page = 1, perPage = 10) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
            query,
            page,
            perPage
        },
        headers: {
            Authorization: `Client-ID ${UNSPLASH_KEY}`,
        },
    });
    return response.data;

}

// function fetchPexelsVideos(query, page = 1, perPage = 10) {
//     const url = `https://api.pexels.com/v1/videos/search?query=${query}&page=${page}&per_page=${perPage}`;
//     return axios.get(url, {
//         headers: {
//             Authorization: PEXELS_KEY,
//         },
//     });
// }



async function fetchPexelsVideos(query, page = 1, perPage = 10) {
    const response = await axios.get("https://api.pexels.com/v1/videos/search", {
        params: {
            query,
            page,
            perPage
        },
        headers: {
            Authorization: PEXELS_KEY,
        },
    });
    return response.data;
}

export { fetchUnsplashImages, fetchPexelsVideos };