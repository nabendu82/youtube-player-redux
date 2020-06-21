import { FETCH_YTSEARCH, USER_SELECTED } from './types'
import YTSearch from "youtube-api-search"
const API_KEY = process.env.REACT_APP_API_KEY;

export const getSearchResult = (searchTerm) => dispatch => {
    return YTSearch({ key: API_KEY, term: searchTerm}, data => {
        console.log(data);
        dispatch({ type: FETCH_YTSEARCH, payload: data });
    })
};

export const getUserSelected = (video) => dispatch => {
    console.log(video);
    dispatch({ type: USER_SELECTED, payload: video });
};
