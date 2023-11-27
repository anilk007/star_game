import { createSelector } from 'reselect'

import _ from 'lodash';

const allTodoSelector = state => state.toDoSliceReducer.todoArray;
const completedIDsSelector = state => state.toDoSliceReducer.completedIDs;

const getCompletedTodos = (todoArray, completedIDs) => {

    const completedTodos = _.filter(todoArray[0], todo => 
        _.includes(completedIDs, todo.id));

    return completedTodos;


}

//=========================

export default createSelector (
    allTodoSelector,
    completedIDsSelector,
    getCompletedTodos
);


