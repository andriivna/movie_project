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

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setCurrentMovie: (state, action) => {
            state.currentMovie = action.payload
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

    });

const {reducer:movieReducer, actions:{setCurrentMovie}} = movieSlice;


const movieActions ={
    getAll,
    setCurrentMovie,

}

export {
    movieReducer,
    movieActions,

}