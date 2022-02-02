import './App.css';
import Form from "./conponents/Form/Form";
import Todos from "./conponents/Todos/Todos";


const App = () => {

    return (
        <div className="app">
            <Form/>
            <Todos/>
        </div>
    );
}

export default App;
