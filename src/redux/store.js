import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer,genreReducer ,filterReducer} from "./slices";


const rootReducer = combineReducers({
        movieReducer,
    filterReducer,
    genreReducer

});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}