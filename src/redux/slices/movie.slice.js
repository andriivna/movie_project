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
    filterParam: '',
    page: '1',
    with_genres:''

}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page, with_genres}, {rejectedWithValue}) => {
        try {
            const {data} = await movieService.getAll({page}, {with_genres});
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
        },
        setFilterParam:(state, action)=>{
            state.filterParam = action.payload
        },
        setQueryParams: (state, action) => {
            state.page = action.payload.page;
            state.with_genres  = action.payload.with_genres;
        },
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

const {reducer:movieReducer, actions:{setCurrentMovie, setFilterParam, setQueryParams}} = movieSlice;


const movieActions ={
    getAll,
    setCurrentMovie,
    setFilterParam,
    setQueryParams

}

export {
    movieReducer,
    movieActions,

}