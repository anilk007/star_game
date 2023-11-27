import React from 'react';


const SelectButtonComponent = () => {

  console.log("AddElementComponent ...");

  let [myNum, setMyNum] = React.useState();

  console.log("Math.floor :", Math.floor(700 / 200));

  console.log("modulas :", 700 % 200);

  var x = 3.2;
  var decimals = x - Math.floor(x);
  console.log("decimals", decimals);
  console.log("decimals.toFixed(1) :", decimals.toFixed(1));

  let xStr = x.toString();

  console.log("xStr :", xStr);

  let arr = xStr.split('.');

  console.log("arr :", arr);
  console.log("arr 2nd ele:", arr[1]);


  let content = [];

  function printNumber(e) {
    console.log("you selected===>", e);
    setMyNum(e);
  }

  for (let i = 0; i < 100; i++) {
    content.push(<button onClick={(ee) => printNumber(i)}>{i}</button>);
  }

  /*
   x = 700/200
   3.5
   console.log(floor(700/200));
   console.log(Math.floor(700/200));

  */

  return (

    <>
      <h1> ...select button.. </h1>


      <button>my button</button>
      {content}


      <div> You selected {myNum} </div>


      {/*
      <input type="text" ></input>
    */}
    </>



  )





}


export default SelectButtonComponent;