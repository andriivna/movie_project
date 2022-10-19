import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";

const initialState={
    genres:[],
    error:null,
    loading:false
}

const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_,{rejectedWithValue})=>{
        try {
            const {data} = await genreService.getAllGenres()
            return data
        }catch (e) {
            return rejectedWithValue(e.response?.data)
        }
    }
)

const genresSlice = createSlice({
    name:'genresSlice',
    initialState,
    reducers:{},

    extraReducers:builder =>
        builder.addCase(getAllGenres.fulfilled,(state, action)=>{
            state.genres = action.payload
            state.loading = false
        })
            .addCase(getAllGenres.pending,(state, action)=>{
                state.error=action.payload
            })
})

const {reducer: genresReducer} = genresSlice;

const genresAction ={
    getAllGenres
}

export {
    genresReducer,
    genresSlice,
    genresAction
}