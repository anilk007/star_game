import React from 'react';
import axios from 'axios';


const PostData = () => {

    console.log("Environment:", process.env);
    console.log(process.env.REACT_APP_API_KEY);

    let [responseData, setResponseData] = React.useState([]);

    
    //    ===============
    // https://jsonplaceholder.typicode.com/posts
    //  
    // 

    let URL = "https://jsonplaceholder.typicode.com/posts";

    const sendData = React.useCallback(() => {
        axios({
            "method": "POST",
            "url": URL,
            body: JSON.stringify({
                "title": "foo",
                "body": "bar",
                "userId": 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => {
                console.log("response :");
                console.log(response);

                console.log("response.data :");
                console.log(response.data);

                setResponseData(response.data);
             //   setId(response.data.id);
                
            })
            .catch((error) => {
                console.log("error :")
                console.log(error)
            })
    }, [URL])

    //================

    React.useEffect(() => {
        sendData()
        //console.log("responseData====>", responseData);
    }, [sendData])

    //================   

    return (<>
        <h1>Post Data .. </h1>
        <ul>
            {responseData.length}
            {responseData && responseData.data}

            



        </ul>
    </>);


}


export default PostData;