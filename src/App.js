import {useState} from "react";

import './App.css';

function App() {

    const [current, setCurrent] = useState(0);

    const increment = () => {
       setCurrent(current + 1);
    }

    const decrement = () => {
        setCurrent(current - 1);
    }

    const reset = () => {
      setCurrent(0);
    }


    return (
        <>
            <div>
                <div>{current}</div>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
                <button onClick={reset}>reset</button>
            </div>
        </>
    );
}

export default App;
