import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectCounter, increment, decrement, reset } from './counterSlice';

const Home = () => {


    const dispatch = useDispatch();
    const counter = useSelector(selectCounter);

    const handleInc = () => {
        dispatch(increment());
    }

    const handleDec = () => {
        dispatch(decrement());

    }
    const handleReset = () => {
        dispatch(reset());
    }

    return (<>


        <h1>Home COmponent</h1>
        <h2>Counter: {counter} </h2>
        <hr />
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>decrement</button>
        <button onClick={handleReset}>reset</button>
    </>);
}

export default Home;