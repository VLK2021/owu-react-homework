import {useEffect, useState} from "react";

import './App.css';


function App() {
    const [current, setCurrent] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (!isVisible) {
            return;
        }
        let timerId = setInterval(() => {
            setCurrent((current) => current + 1);
        }, 1000);
        return () => {
            clearInterval(timerId);
        }
    }, [isVisible]);

    const reset = () => {
        setIsVisible(false);
        setCurrent(0);
    }


    return (
        <>
            <div>
                <div>Seconds:{current}</div>
                <button onClick={() => {
                    setIsVisible((isVisible) => !isVisible);
                }}>{isVisible ? 'Stop' : 'Start'}</button>

                <button onClick={reset}>reset</button>
            </div>
        </>
    );
}

export default App;
