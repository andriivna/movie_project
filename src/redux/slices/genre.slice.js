import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService, movieService} from "../../services";



const initialState ={
    genres: [],
    currentGenre:null,
    loading:false,
    error:null,
}

const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async ({page}, {rejectedWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            return data

        } catch (e) {

            return rejectedWithValue(e.response.data)

        }
    }
);

const getMoviesByGenres = createAsyncThunk(
    'movieSlice/getMoviesByGenres',
    async ({page,with_genres}) =>{
        const {data} = await movieService.getMovieByGenre(page, with_genres);
        return data
    }
)

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
                state.genres = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getMoviesByGenres.fulfilled,(state, action)=>{
                const {page, with_genres} = action.payload;
                state.page = page;
                state.with_genres = with_genres;
            })
});

const {reducer: genreReducer, actions: {setCurrentGenre}} = genreSlice;

const genreActions={
    getAll,
    setCurrentGenre,
    getMoviesByGenres
}

export {
    genreReducer,
    genreActions
}