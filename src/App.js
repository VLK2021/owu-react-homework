import {Route, Routes, Navigate} from "react-router-dom";

import Layout from "./component/Layout/Layout";
import Episodes from "./pages/Episodes/Episodes";
import Characters from "./pages/Characters/Characters";


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'episodes?page=1'}/>}/>
                    <Route path={'episodes'} element={<Episodes/>}/>
                    <Route path={'episodes/:id/characters'} element={<Characters/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
