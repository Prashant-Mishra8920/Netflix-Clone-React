import { combineReducers } from "@reduxjs/toolkit";
import movieReducer from "./MovieReducer";

const reducer = combineReducers({
    item: movieReducer
})

export default reducer