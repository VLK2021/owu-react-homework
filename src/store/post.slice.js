import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../services";


export const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',

    async () => {
        try {
            const posts = await userService.getAllP();
            return posts
        } catch (e) {

        }
    }
)

const postSlice = createSlice({
    name: 'postSlice',

    initialState: {
        posts: [],
        status: null,
        error: null
    },

    reducers: {},
    extraReducers: {
        [getAllPosts.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.posts = action.payload
        },
        [getAllPosts.rejected]: (state, action) => {

        }
    }
})

const postReducer = postSlice.reducer;
export default postReducer;