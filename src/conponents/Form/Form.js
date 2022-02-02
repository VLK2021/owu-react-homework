import React from 'react';
import {useDispatch} from "react-redux";

import {addTodo} from "../../store";


const Form = () => {

    const dispatch = useDispatch();

    const submit = (e)=>{
        e.preventDefault()
        dispatch(addTodo({todo: e.target.todo.value}))
        e.target.reset()
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" name={'todo'}/>
                <button>save</button>
            </form>
        </div>
    );
};

export default Form;