import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {userService} from "../services";


export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',

    async () => {
        try {
            const users = await userService.getAll();
            return users
        } catch (e) {

        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',

    initialState: {
        users: [],
        status: null,
        error: null
    },

    reducers: {},

    extraReducers: {
        [getAllUsers.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.users = action.payload
        },
        [getAllUsers.rejected]: (state, action) => {

        }

    }
})

const userReducer = userSlice.reducer;

export default userReducer;