import * as types from '../actions/types';

const initialState = {
    _ytSearchState: [],
    _userSelected: {}
}

const YTReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case types.FETCH_YTSEARCH:
            newState = { ...state, _ytSearchState: action.payload };
            break;
        case types.USER_SELECTED:
            newState = { ...state, _userSelected: action.payload };
            break;
        default:
            newState = state;
    }
    return newState;
}

export default YTReducer