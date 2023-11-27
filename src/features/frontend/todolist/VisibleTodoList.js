import React from 'react';

import { useSelector } from "react-redux";

import ToDo from '../todolist/ToDo';

const VisibleTodoList = () => {

    const todos = useSelector(state => state.toDoSliceReducer.todoArray);

    return (<>

        <ul>

            {todos.map(todo => (

                <ToDo key={todo.id} {...todo} />


            ))}

        </ul>


    </>);
}

export default VisibleTodoList;

