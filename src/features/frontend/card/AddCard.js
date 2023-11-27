import React, { useRef } from 'react';


/*
    const testData = [
            {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
            {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
    ];
*/

const AddCard = (props) => {

    const inputRef = useRef();

    const onHandleSubmitLocal = (event) => {
        event.preventDefault();
        const selectedName = inputRef.current.value;
        console.log("handle Submit is called",selectedName);
        
        props.onHandleSubmit(selectedName);
        inputRef.current.value = "";
        //setCardName(event.target.value);
    }


    return (<>
        <h1>AddCard</h1>

        <form onSubmit={onHandleSubmitLocal}>
            <input type="text" name="cardName" ref={inputRef}/>
            <button type="submit">Add Card</button>
        </form>


    </>);
}

export default AddCard;