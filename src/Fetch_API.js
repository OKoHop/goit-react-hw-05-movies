import axios from "axios";

const API_KEY = '4e40d6a8215c5cf4ee6a4b34aaf50b0b';
const options = {
    params: {
        api_key: API_KEY,
        }
}

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export default async function getTrendList() {
    const response = await axios.get('trending/all/day', options)
    return response.data.results;
}

export async function getMovie(movieID) {
    const response = await axios.get(`movie/${movieID}?language=en-US`, options)
    return response.data;
}

export async function getCast(movieID) {
    const response = await axios.get(`movie/${movieID}/credits?language=en-US`, options)
    return response.data;
}

export async function getReviews(movieID) {
    const response = await axios.get(`movie/${movieID}//reviews?language=en-US&page=1`, options)
    return response.data;
}

export async function getQuery(search) {
    const response = await axios.get(`search/movie`, {
        params: {
        api_key: API_KEY,
        query: `${search}`,
        languege: 'en-US',
        }
    })
    return response.data;
}