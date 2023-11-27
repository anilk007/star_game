import React from 'react';
import './card.css';



const CardList = (props) => {
    console.log("cardlist props.profiles");
    console.log(props.profiles);

    return (<>
        <h1>CardList</h1>

        {props.profiles.map((card) => {
            return (
                <li key={card.id}>

                    <span>{card.login} </span>
                    <span>{card.name} </span>
                    <span>
                        <img alt="card" className='cardimage' src={card.avatar_url} />
                    </span>


                </li>
            );
        })}


    </>);
}

export default CardList;