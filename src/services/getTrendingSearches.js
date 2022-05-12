import { API_URL, API_KEY } from "./config";

const fromApiToSearches = apiResponse => {
  const {data} = apiResponse;
  return data;
}

export function getTrendingSearches (){
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`

  return fetch(apiURL)
    .then(resp => resp.json())
    .then(fromApiToSearches)
}