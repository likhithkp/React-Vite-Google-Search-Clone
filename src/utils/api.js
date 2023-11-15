import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
    key : "AIzaSyA0Por6g4kxUaHHLp-dvgE0BhZ-OiyvZE0",
    cx : "524dffce921304f09",
}

export const fetchDataFromApi = async (payload) => {
    const {data} = await axios(BASE_URL, {
        params : {...params, ...payload}
    })
    return data;
};

