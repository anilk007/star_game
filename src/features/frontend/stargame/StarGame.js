import React, { useEffect, useState } from 'react';

import './stargame.css';
import { Container, Row, Col } from 'react-bootstrap'

import StarComponent from './StarComponent'

import NumberComponent from './NumberComponent'

const StarGame = () => {

    const [used, setUsed] = useState([]);

    const [availableNos, setAvailableNos] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const [candidateNos, setCandidateNos] = useState([]);

    const [starArray, setStarArray] = useState([]);

    const [winningStatus, setWinningStatus] = useState(false);

    let cellBGColor = {
        available: "background-color: white",
        candidate: "background-color: blue",
        used: "background-color: green",
        notValid: "background-color: red"
    }


    const generateStars = React.useCallback(() => {

        if (availableNos.length === 0) {
            setWinningStatus(true);
            return;
        }

        let genRandomNo = Math.floor(Math.random() * availableNos.length);

        let endNumber = availableNos[genRandomNo];

        let tmpArray = [];

        for (let i = 1; i <= endNumber; i++) {
            tmpArray.push(i);
        }

        console.log('starArray tmpArray', tmpArray);

        setStarArray(tmpArray);

    }, [availableNos])


    useEffect(() => {
        generateStars();
    }, [generateStars])

    // how to optimize below code
    // so many if conditions
    const validateClickedNo = (e, clickedNo) => {

        // query why e.target.value is undefined
        console.log("StarGame validateClickedNo e.target.value" + e.target.value);

        console.log("StarGame validateClickedNo clickedNo " + clickedNo);

        if (clickedNo === starArray.length && !candidateNos.length) {
            setUsed((prevStateUsed) => [...prevStateUsed, clickedNo])

            setAvailableNos((prevStateAvailable) =>
                [...prevStateAvailable.filter((value) => value !== clickedNo)])

            e.target.style = cellBGColor.used  //'green';
            generateStars();
            console.log("used Array===>", used);
        }

        if (clickedNo < starArray.length) {

            setCandidateNos((prevStateCandidateNos) => {
                let candidateNos = [...prevStateCandidateNos, clickedNo];

                console.log("candidateNos Array===>", candidateNos);

                let sumCandidateNos = candidateNos.reduce((pv, cv) => pv + cv, 0);

                if (sumCandidateNos === starArray.length) {

                    setUsed((prevStateUsed) => [...prevStateUsed, candidateNos])

                    setAvailableNos((prevStateAvailable) =>
                        [...prevStateAvailable.filter((value) => !candidateNos.includes(value))])

                    console.log("sumCandidateNos === starArray.length happened");

                    let x = document.getElementsByClassName("number-display");

                    for (const ele in x) {
                        if (typeof x[ele] === 'object' && x[ele].hasAttribute("style")) {
                            x[ele].setAttribute("style", cellBGColor.used);
                        }
                    }
                    setCandidateNos([]);
                    generateStars();
                }

                return candidateNos;
            })

            e.target.style = cellBGColor.candidate;
        }



    }


    return (<Container>
        <h4>Star Game</h4>

        {(winningStatus === true ?
            <h3>YOU WON GAME </h3> :
            null)
        }
        <Row>
            <Col xs={6}>
                <StarComponent starArray={starArray} winningStatus={winningStatus}/>

            </Col>
            <Col xs={6}>
                <NumberComponent validateClickedNo={validateClickedNo} />

            </Col>
        </Row>

    </Container>);
}

export default StarGame;