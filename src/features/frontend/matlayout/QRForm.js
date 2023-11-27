import React, { useEffect, useState } from 'react';

import axios from 'axios';

import './myqr.css';

// https://stackoverflow.com/questions/61531025/how-do-i-display-a-random-image-retrieved-from-an-array-in-react-native

const QRForm = ( props ) => {

  //================   

 

  //================


  return (

    <>

      <div> QRForm  Component</div>

      <form onSubmit={props.handleSubmit}>

        <input required type="text" name="qrurl" placeholder="Enter URL" />

        <input type="submit" />

      </form>



    </>



  )

}


export default QRForm;