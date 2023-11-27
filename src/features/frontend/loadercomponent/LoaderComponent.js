import React from 'react';

import axios from 'axios';

import loaderImage from "./loader.png";

import './loader.css';

// https://stackoverflow.com/questions/61531025/how-do-i-display-a-random-image-retrieved-from-an-array-in-react-native

const LoaderComponent = () => {

  console.log("LoaderComponent ...");

  console.log(process.env.REACT_APP_DBSTRING);

  let [responseData, setResponseData] = React.useState([]);

  let [errorMessage, setErrorMessage] = React.useState(null);

  let URL = 'http://localhost:8000/dummyposts';

  //    ===============
  const fetchData = React.useCallback(() => {
    axios({
      "method": "GET",
      "url": URL
    })
      .then((response) => {
        console.log("response :");
        console.log(response);

        console.log("response.data :");
        console.log(response.data);

        setResponseData(response.data)

        document.getElementById("loader").classList.add("hide-loader");
        setErrorMessage(null);
      })
      .catch((error) => {
        console.log("error :")
        console.log(error)
        document.getElementById("loader").classList.add("hide-loader");
        setErrorMessage(JSON.stringify(error));
      })
  }, [URL])

  //================

  React.useEffect(() => {
    fetchData()
    //console.log("responseData====>", responseData);
  }, [fetchData])

  //================   


  return (

    <>

      <div> LoaderComponent  </div>
      
      <img id="loader" src={loaderImage} width="12%" height="12%" alt="loaderImage">
      </img>
 
      {errorMessage && <div>{errorMessage}</div>}

      {responseData.map((repo) => {
        return (
          <li key={repo.id} className='list'>


            <span className='repo-text'>{repo.userId} </span>
            <span className='repo-description'>{repo.id}</span>

            <span className='repo-text'>{repo.title} </span>
            <span className='repo-description'>{repo.body}</span>


          </li>
        );
      })}


    </>



  )

}


export default LoaderComponent;