import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../services";


export const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',

    async () => {
        try {
            const comments = await userService.getAllC();
            return comments
        } catch (e) {

        }
    }
)

const commentSlice = createSlice({
    name: 'commentSlice',

    initialState: {
        comments: [],
        status: null,
        error: null
    },

    reducers: {},
    extraReducers: {
        [getAllComments.pending]: (state, action) => {
            state.status = 'Loading...'
            state.error = null
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.comments = action.payload
        },
        [getAllComments.rejected]: (state, action) => {

        }
    }
})

const commentReducer = commentSlice.reducer;
export default commentReducer;