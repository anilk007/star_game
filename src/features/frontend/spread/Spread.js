import React from 'react';



const Spread = () => {

    const props = {v : 100}

    const comp1 = <Spread {...props} v={200} />
    const comp2 = <Spread v={200} {...props} />

    console.log(comp1.props);
    console.log(comp2.props);

    return (<>
        <h1>Spread operator example</h1>
    </>);
}

export default Spread;