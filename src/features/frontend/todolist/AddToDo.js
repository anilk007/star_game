import React from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from "../todolist/toDoSlice";

const AddToDo = () => {

    const dispatch = useDispatch();

    let [taskName, setTaskName] = React.useState([]);

    const handleChange = e => {
        setTaskName(e.target.value);
    }

    return (<>

        <form onSubmit={e => {
            e.preventDefault()

            dispatch(addToDo(taskName))

            setTaskName('');
        }
        }
        >

            <input type="text" value={taskName} onChange={handleChange} />

            <button type="submit">AddTodo</button>

        </form>

    </>);
}

export default AddToDo;