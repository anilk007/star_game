import React, { useState } from 'react';

import avtarImage from "./avtar.png";

import './rotate-card.css';




const RotateCardComponent = () => {

  console.log("RotateCardComponent ...");

  const [avtarDesc, setAvtarDesc] = useState(false);
  const [result, setResult] = useState("test-ans");

  const toggleDetail = () => {
    setAvtarDesc(true);

  }

  const toggleImage = () => {
    setAvtarDesc(false);
  }

  
  const checkAns = (e) => {
    setResult(e.target.value);

    console.log("result", result)

  }

  return (

    <>
      <h1> ...Rotate Card.. </h1>

      
      {/* // question
      // ans-1, ans-2, ans -3 radio
      // ans-2 --> correct */}





      {avtarDesc ? (
        <div onClick={toggleImage}>
          <h2> name : Mahesh Shah </h2>
          <h3> Doctor </h3>
          <h4> you selected { } answer</h4>
        </div>
      ) : (
        <div className="avtar-style">
          <img src={avtarImage} alt="Avatar" onClick={toggleDetail}>
          </img>
          <div className="avtar-question" > question </div>
            <div> <input type="radio" name="ans" value="ans-1" onChange={ (e) => checkAns} />ans-1 </div>
            <div> <input type="radio" name="ans" value="ans-2" onChange={(e) => checkAns} />ans-2 </div>
            <div> <input type="radio" name="ans" value="ans-3" onChange={(e) => checkAns}/>ans-3 </div>

            <div> <button> submit answer </button> </div>
        </div>
      )}


    </>



  )


}


export default RotateCardComponent;