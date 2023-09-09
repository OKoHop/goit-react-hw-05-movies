import axios from "axios";

const API_KEY = '4e40d6a8215c5cf4ee6a4b34aaf50b0b';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export default async function getTrendList() {
    const response = await axios.get('trending/all/day', {
        params: {
            api_key: API_KEY,
        }
    })
    return response.data.results;
}