import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";



const initialState={
    movies:[],
    genres:[],
    currentMovie:null,
    loading:false,
    error:null,
    currentPage: 1,
    totalMoviesPage: 0,

}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectedWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)

        }
    }
);

const getMovieByGenre = createAsyncThunk(
    'genreSlice/getAll',
    async ({page}, {rejectedWithValue}) => {
        try {
            const {data} = await movieService.getMovieByGenre(page);
            return data

        } catch (e) {

            return rejectedWithValue(e.response.data)

        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setCurrentMovie: (state, action) => {
            state.currentMovie = action.payload
        }
    }
});


    const genreSlice = createSlice({
        name: 'genreSlice',
        initialState,
        reducers: {
            setCurrentGenre: (state, action) => {
                state.currentGenre = action.payload
            }
        },

        extraReducers: builder =>
            builder
                .addCase(getAll.fulfilled, (state, action) => {
                    state.movies = action.payload
                    state.loading = false
                })
                .addCase(getAll.pending, (state, action) => {
                    state.loading = true
                })
                .addCase(getMovieByGenre.fulfilled,(state, action)=>{
                    const {page, with_genres} = action.payload;
                    state.page = page;
                    state.with_genres = with_genres;
                })
    });

const {reducer:movieReducer, actions:{setCurrentMovie}} = movieSlice;
const {reducer:genreReducer} = genreSlice

const movieActions ={
    getAll,
    setCurrentMovie,
    getMovieByGenre
}

export {
    movieReducer,
    movieActions,
    genreReducer

}