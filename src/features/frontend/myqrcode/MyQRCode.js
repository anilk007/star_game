import React, {  } from 'react';

import axios from 'axios';

import './myqr.css';

import QRForm from './QRForm.js';

// https://stackoverflow.com/questions/61531025/how-do-i-display-a-random-image-retrieved-from-an-array-in-react-native

const MyQRCode = () => {

  let [responseData, setResponseData] = React.useState([]);

  let [data, setData] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);





  const handleOrder = () => {
    //let tempData = data;

    let dataReverse = [...data.reverse()]


    



    setData(dataReverse);
  }


  // 

  // https://jsonplaceholder.typicode.com/posts

  //================
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form is submitted");
    console.log(event.target.elements.qrurl.value)

    let qrurl = event.target.elements.qrurl.value;

    fetchData(qrurl);

  }

  //================   
  const fetchData = React.useCallback((qrurl) => {

    console.log("fetchData qrurl==>", qrurl)

    axios({
      "method": "GET",
      "url": qrurl
    })
      .then((response) => {
        console.log("response :");
        console.log(response);

        console.log("response.data :");
        console.log(response.data);

        setResponseData(response.data)
      })
      .catch((error) => {
        console.log("error :")
        console.log(error)
      })
  }, [])


  //=================


  return (

    <>

      <div> MyQRCode  </div>


      <QRForm handleSubmit={handleSubmit} />



      {
        responseData.map((availablePost) => {

          return (
            <>

              <li key={availablePost.id} >
                userId <span>{availablePost.userId}</span>
                id <span>{availablePost.id}</span>
              </li>

            </>
          );


        }
        )
      }
      {

        data.map((num, index) => {
          return (
            <div className={(index % 2 === 0) ? 'ml-5 text-primary' : 'ml-5 text-danger'} key={index}>{num}</div>
          );
        })




      }
      <button onClick={handleOrder}>Reverse..</button>
    </>



  )

}


export default MyQRCode;