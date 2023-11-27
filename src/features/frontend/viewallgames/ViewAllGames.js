import React from 'react';
import axios from 'axios';


const ViewAllGames = () => {

    console.log("Environment:", process.env);
    console.log(process.env.REACT_APP_API_KEY); 

// npm run build
// serve -s build
// npm run build:staging
// serve -s build

    console.log(process.env.REACT_APP_DBSTRING); 

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

                setResponseData(response.data)
            })
            .catch((error) => {
                console.log("error :")
                console.log(error)
            })
    }, [])

    //================

    React.useEffect(() => {
        fetchData()
        //console.log("responseData====>", responseData);
    }, [fetchData])

    //================   

    return (<>
        <h1>All Games .. </h1>
        <ul>
            {responseData.length}
            {responseData && responseData.data}

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



        </ul>
    </>);


}


export default ViewAllGames;