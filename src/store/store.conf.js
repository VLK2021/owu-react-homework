import {configureStore} from "@reduxjs/toolkit";

import userReducer from "./user.slice";
import postReducer from "./post.slice";
import commentReducer from "./comment.slice";


const store = configureStore({
    reducer: {
        userReducer,
        postReducer,
        commentReducer
    }
})

export default store;