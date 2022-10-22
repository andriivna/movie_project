import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer, genresReducer } from "./slices";


const rootReducer = combineReducers({
        movieReducer,
    genresReducer

});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}