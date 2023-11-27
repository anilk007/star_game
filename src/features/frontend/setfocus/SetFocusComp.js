import React, { useRef, useEffect } from 'react';

const SetFocusComp = () => {

    const inputRef = useRef(null);

    useEffect((() =>
        inputRef.current.focus()
    ), [])

    return (<>
        <h1>Set Focus</h1>

        <input ref={inputRef} />

         <input />

    </>);
}

export default SetFocusComp;