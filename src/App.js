import {Routes, Route, Link} from "react-router-dom";

import PostsPage from "./pages/PostsPage/PostsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import css from './App.module.css'
import Leyout from "./component/Leyout/Leyout";
import SingleUserPage from "./pages/SingleUserPage/SingleUserPage";
import UserPostsPage from "./pages/UserPostsPage/UserPostsPage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import PostCommentsPage from "./pages/PostCommentsPage/PostCommentsPage";

function App() {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Leyout/>}>
                    <Route path={"users"} element={<UsersPage/>}>
                        <Route path={":id"} element={<SingleUserPage/>}>
                            <Route path={"posts"} element={<UserPostsPage/>}/>
                        </Route>
                    </Route>

                    <Route path={"posts"} element={<PostsPage/>}>
                        <Route path={":id"} element={<SinglePostPage/>}>
                            <Route path={"comments"} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
