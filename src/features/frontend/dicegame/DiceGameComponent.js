import React, { useEffect, useState } from 'react';

import dice1 from "./dice-1.svg";
import dice2 from "./dice-2.svg";
import dice3 from "./dice-3.svg";
import dice4 from "./dice-4.svg";
import dice5 from "./dice-5.svg";
import dice6 from "./dice-6.svg";

import './dice-game.css';

// https://stackoverflow.com/questions/61531025/how-do-i-display-a-random-image-retrieved-from-an-array-in-react-native

const DiceGameComponent = () => {

  const [diceNoFirst, setDiceNoFirst] = useState(dice4);
  const [diceNoSecond, setDiceNoSecond] = useState(dice6);

  const [total, setTotal] = useState(10);

  useEffect(() => {
    console.log('diceNoFirst :',diceNoFirst);
    console.log('diceNoSecond :',diceNoSecond);
    console.log('total :',total);
   },[diceNoFirst, diceNoSecond, total]);

  console.log("DiceGameComponent ...");

  const changeDice = () => {

    console.log("change Dice");

    let firstDiceParam = Math.floor(Math.random() * 6) + 1;

    switch (firstDiceParam) {
      case 1:
        setDiceNoFirst(dice1);
        break;
      case 2:
        setDiceNoFirst(dice2);
        break;
      case 3:
        setDiceNoFirst(dice3);
        break;
      case 4:
        setDiceNoFirst(dice4);
        break;
      case 5:
        setDiceNoFirst(dice5);
        break;
      case 6:
        setDiceNoFirst(dice6);
        break;
      default:
        setDiceNoFirst(dice5);
    }

    console.log("firstDiceParam :", firstDiceParam);
    //==================================

    let secondDiceParam = Math.floor(Math.random() * 6) + 1;

    switch (secondDiceParam) {
      case 1:
        setDiceNoSecond(dice1);
        break;
      case 2:
        setDiceNoSecond(dice2);
        break;
      case 3:
        setDiceNoSecond(dice3);
        break;
      case 4:
        setDiceNoSecond(dice4);
        break;
      case 5:
        setDiceNoSecond(dice5);
        break;
      case 6:
        setDiceNoSecond(dice6);
        break;
      default:
        setDiceNoSecond(dice5);
    }

    console.log("secondDiceParam :", secondDiceParam);
    setTotal(firstDiceParam + secondDiceParam);

    

  }

  

  return (

    <>

      <div>
        <div>
          {/* <img src={dice2} width="12%" height="12%" alt="Avatar"> */}

          <img src={diceNoFirst} width="12%" height="12%" alt="Avatar">
          </img>
        </div>

        <div>
          {/* {{`dice${diceNoSecond}`} } */}
          <img src={diceNoSecond} width="12%" height="12%" alt="Avatar">
          </img>
        </div>
      </div>
      <div> <button onClick={changeDice}> Play Dice </button> </div>
      <div> Total :  {total} </div>


    </>



  )


}


export default DiceGameComponent;