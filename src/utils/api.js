import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
    key : import.meta.env.VITE_GOOGLE_API_KEY,
    cx : import.meta.env.VITE_GOOGLE_API_CX,
}

export const fetchDataFromApi = async (payload) => {
    const {data} = await axios(BASE_URL, {
        params : {...params, ...payload}
    })
    return data;
};

