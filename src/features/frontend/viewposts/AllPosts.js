import React from 'react';
import axios from 'axios';

import { useDispatch } from 'react-redux';

import { addPosts, addToSelectedIDS } from "../viewposts/postsSlice";

const AllPosts = (props) => {

    console.log("fruits :",props.fruits);

    const dispatch = useDispatch() 


    let [responseData, setResponseData] = React.useState([]);

       //    ===============
       const fetchData = React.useCallback(() => {
        axios({
            "method": "GET",
            "url": "https://jsonplaceholder.typicode.com/posts"
        })
            .then((response) => {
                console.log("response :");
                console.log(response);

                console.log("response.data :");
                console.log(response.data);

                
                // call reducer
               dispatch(addPosts(response.data));

                setResponseData(response.data)
            })
            .catch((error) => {
                console.log("error :")
                console.log(error)
            })
    }, [dispatch])

    //================

    React.useEffect(() => {
        fetchData()
        //console.log("responseData====>", responseData);
    }, [fetchData])

    //=================
    return (<>
        
        <ul>
            {responseData.length}
            {responseData && responseData.data}

            {responseData.map((post) => {
                return (
                    <li key={post.id} className='list'>

                        <input type="Checkbox" id="filled-in-box"
                         onChange={() => dispatch(addToSelectedIDS(post.id))}  >

                        </input>

                        {/* <span className='repo-text'>{repo.userId} </span> */}
                        <span className='repo-description'>{post.id}</span>

                        <span className='repo-text'>{post.title} </span>

                        <span className='repo-description'>{post.body}</span>


                    </li>
                );
            })}



        </ul>

        

      


    </>);
}

export default AllPosts;