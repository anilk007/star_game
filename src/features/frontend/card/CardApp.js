import React from 'react';

import CardList from '../card/CardList';
import AddCard from '../card/AddCard';

import axios from 'axios';
import { useState } from 'react';

// const testData = [
//     { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
//     { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
//     { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
// ];

const CardApp = () => {

    const [ profiles, setProfiles ] = useState([]);

    const addToCardList = (selectedName) => {

        console.log("addToCardList is called", selectedName);

        const url = `https://api.github.com/users/${selectedName}`;

        console.log("url", url);

        // const res = "";
        // debugger
        // try {
        //     res = await axios.get(url);
        //     debugger
        // } catch (error) {
        //     console.log("Error", error);
        //     debugger
        // }
        
        
            axios({
                "method": "GET",
                "url": url
            })
                .then((response) => {
                    
                    console.log("response :");
                    console.log(response);
    
                    console.log("response.data :");
                    console.log(response.data);
                    
                    const arr = [...profiles,...[response.data]]
                    setProfiles(arr);               
                    
                })
                .catch((error) => {
                    
                    console.log("error :")
                    console.log(error)
                    
                })
        }

    

    return (<>
        <h1>Card example</h1>

        <AddCard onHandleSubmit={addToCardList} />

        <CardList profiles={profiles} />
    </>);
}

export default CardApp;