import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../index";

const initialState={
    genres:[],
    error:null,
    loading:false
}

const getAll = createAsyncThunk(
    'genresSlice/getAll',
    async (_,{rejectedWithValue})=>{
        try {
            const {data} = await genreService.getAll()
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
        builder.addCase(getAll.fulfilled,(state, action)=>{
            state.genres = action.payload
            state.loading = false
        })
            .addCase(getAll.pending,(state, action)=>{
                state.error=action.payload
            })
})

const {reducer: genresReducer} = genresSlice;

const genresAction ={
    getAll
}

export {
    genresReducer,
    genresSlice,
    genresAction
}