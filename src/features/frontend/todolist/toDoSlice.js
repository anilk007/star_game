import { createSlice } from '@reduxjs/toolkit';

let nextTodoId = 0
const NO_FILTER = "NO_FILTER";

const toDoSlice = createSlice({
    name: "todos",
    initialState: {
        todoArray: [],
        completedIDs: [],
        todoFilter: NO_FILTER
    },
    reducers: {
        doFilter(state, action) {
            state.todoFilter = action.payload;
        },

      
        toggleTodo(state, action) {

            for (let todo of state.todoArray) {

                if (todo.id === action.payload) {
                    
                    let foundAt = state.completedIDs.indexOf(todo.id);
                                          
                    if (foundAt >= 0) {
                        //debugger
                        //state.completedIDs.slice(foundAt, 1);
                        state.completedIDs = state.completedIDs.filter(id => id !== todo.id)
                    } else {
                        state.completedIDs.push(todo.id);
                        //debugger
                    }
                    todo.completed = !todo.completed
                }
            }

        },

        addToDo: {
            reducer(state, action) {

                const { id, text } = action.payload;
                state.todoArray.push({ id, text, completed: false });

            },
            prepare(text) {
                return { payload: { text, id: nextTodoId++ } }
            }
        }

    }
});


export const { addToDo, toggleTodo, doFilter } = toDoSlice.actions

export default toDoSlice.reducer;