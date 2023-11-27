import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from "../todolist/toDoSlice";
import './todo.css';

const ToDo = ({ id, completed, text }) => {

    const dispatch = useDispatch()    

    return (<>
        <ul>
            <li className={completed ? 'completed' : 'active'}
                onClick={() => dispatch(toggleTodo(id))}  >
                {id} {text} {completed ? "completed" : "active"}
            </li>
        </ul>

    </>);

}

export default ToDo;
