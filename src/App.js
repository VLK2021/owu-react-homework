import {Route, Routes} from "react-router-dom";

import Users from "./component/Users/Users";
import Layout from "./component/Layout/Layout";
import Posts from "./component/Posts/Posts";
import Comments from "./component/Comments/Comments";
import './App.css';

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Users/>}/>
                    <Route path={'posts'} element={<Posts/>}/>
                    <Route path={'comments'} element={<Comments/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
