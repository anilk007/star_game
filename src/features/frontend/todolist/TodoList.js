import React from 'react';

import AddToDo from '../todolist/AddToDo';

import VisibleTodoList from '../todolist/VisibleTodoList';

import TodoFooter from '../todolist/TodoFooter';

const TodoList = () => {

    return (<>
        <h1>TodoList Component</h1>

        <AddToDo />
        <VisibleTodoList />

        <TodoFooter />


    </>);
}

export default TodoList;