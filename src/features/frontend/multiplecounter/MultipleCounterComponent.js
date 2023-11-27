import React, {useState} from 'react';

// question - why not below '../DisplayCounter'
import DisplayCounter from '../multiplecounter/DisplayCounter';

const MultipleCounterComponent = () => {

    const [ counterValue, setCounterValue ] = useState(0);

    return (<>
        <h1>MultipleCounter Component</h1>

        <button onClick={() => setCounterValue(counterValue + 1)}>+1</button>
        <button onClick={() => setCounterValue(counterValue + 2)}>+2</button>
        <button onClick={() => setCounterValue(counterValue + 4)}>+4</button>

        <DisplayCounter counterValue={counterValue}></DisplayCounter>

    </>);
}

export default MultipleCounterComponent;