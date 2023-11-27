import React from 'react';

const DisplayCounter = (props) => {

 //   const [ counterValue, setCounterValue ] = useState(0);

    

    //setCounterValue( counterValue + props.countMultiplier);

    // useEffect(() => {
    //     setCounterValue( counterValue + props.countMultiplier);
    // },[props.countMultiplier])

//     const incrCounter = () => {
//         setCounterValue( counterValue + props.countMultiplier);
//     }
    
//    incrCounter();

    return (<>
        <h1>Display Counter Component</h1>
        <h4>{ props.counterValue }</h4>


    </>);
}

export default DisplayCounter