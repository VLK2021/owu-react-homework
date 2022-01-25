import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./compponents/Layout/Layout";
import Episodes from "./pages/Episodes/Episodes";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/episode'} element={<Episodes/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
