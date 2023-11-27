import React from 'react';


const AddElementComponent = () => {

  console.log("AddElementComponent ...");

  let [elementList, setElementList] = React.useState([]);

  const addToArray = e => {
    console.log("addToArray is called ...","e.target.value==>",e.target.value);
    setElementList(e.target.value);
  }

  console.log("elementList :==>", elementList);  

  return (

    <>
      <h1> ...AddElementComponent.. </h1>

      <input type="text" onChange={addToArray} ></input>


      {/*
      <input type="text" ></input>
    */}
    </>



  )





}


export default AddElementComponent;