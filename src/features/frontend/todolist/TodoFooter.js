import React from 'react';
import { useDispatch } from 'react-redux';

import { doFilter } from "../todolist/toDoSlice";


const TodoFooter = () => {

    const dispatch = useDispatch()    
        
    const FILTER_COMPLETED = "FILTER_COMPLETED";
    const FILTER_ACTIVE = "FILTER_ACTIVE";
    const NO_FILTER = "NO_FILTER";

    return (<>

        
        <ul>
            
            <button onClick={() => 
                dispatch(doFilter(NO_FILTER))}>All</button>
            <button onClick={() => 
                dispatch(doFilter(FILTER_ACTIVE))}>Active</button>
            <button onClick={() => 
                dispatch(doFilter(FILTER_COMPLETED))}>Completed</button>
        </ul>


    </>);
}

export default TodoFooter;

