import {useReducer} from "react";
import {findAllByDisplayValue} from "@testing-library/react";


const reducer = (state, action) => {

    switch (action.type) {
        case 'INK':
            return {...state, count1: state.count1 + 1};
        case 'DEK':
            return {...state, count1: state.count1 - 1};
        case 'RES':
            return {...state, count1: action.payload};
        case 'INK1':
            return {...state, count2: state.count2 + 2};
        case 'DEK1':
            return {...state, count2: state.count2 - 2};
        case 'RES1':
            return {...state, count2: action.payload};
        case 'INK2':
            return {...state, count3: state.count3 + 3};
        case 'DEK2':
            return {...state, count3: state.count3 - 3};
        case 'RES2':
            return {...state, count3: action.payload};
        default:
            throw new Error('MyError')
    }
    return state
}

function App() {

    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 2, count3: 3});

    return (
            <div>
                {state.count1}
                <button onClick={() => dispatch({type: 'INK'})}>INK</button>
                <button onClick={() => dispatch({type: 'DEK'})}>DEK</button>
                <button onClick={() => dispatch({type: 'RES', payload:0})}>RES</button>
                <hr/>
                {state.count2}
                <button onClick={() => dispatch({type: 'INK1'})}>INK1</button>
                <button onClick={() => dispatch({type: 'DEK1'})}>DEK1</button>
                <button onClick={() => dispatch({type: 'RES1', payload:2})}>RES1</button>
                <hr/>
                {state.count3}
                <button onClick={() => dispatch({type: 'INK2'})}>INK2</button>
                <button onClick={() => dispatch({type: 'DEK2'})}>DEK2</button>
                <button onClick={() => dispatch({type: 'RES2', payload:3})}>RES2</button>
            </div>
    );
}

export default App;
