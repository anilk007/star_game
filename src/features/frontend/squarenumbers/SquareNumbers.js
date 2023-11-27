import React from 'react';

import './square-numbers.css';

import { Row, Col } from 'react-bootstrap';
import { Fragment } from 'react';

// (1) in T480 ui improper for top navbar
// (2) proper selection 

const SquareNumbers = () => {

    

    let numbers = []

    function range() {

        for (let i = 1; i < 10; i++) {
            numbers.push(i);
        }
        return numbers;

    }

    function handleClick(e, no) {
        console.log("clicked==>e :", encodeURI);

   //     e.target.style.background = "green";

   document.getElementById(no).classList.add("selected");

        //  e.target.style.background == "green"? e.target.style.background = "white" : e.target.style.background = "green"
        //  className={`filter-btn${isActive ? ' selected' : ''}`}
        //  className={`filter-btn${isSelected ? ' selected' : 'not-selected'}`}
        // className={`col-numbers ${isSelected ? ' selected' : 'not-selected'}`
        // className={`col-numbers${isSelected ? ' selected' : 'not-selected'}`}
        // className={`${isSelected ? ' selected' : 'not-selected'}`}
    }

    range();

    return (<>
        <h1>Square Numbers..</h1>
        <div className="rectangle-numbers">
            <Row>

                {

                    numbers.map( (no) => {

                        return (
                            <Fragment key={no}>
                                <Col id={no} xs={4} className="col-numbers">
                                    <div 
                                        onClick={(e) => handleClick(e, no)}>{no}
                                    </div>
                                </Col>
                            </Fragment>
                        )

                    })

                }

            </Row>
        </div>
    </>);

}

export default SquareNumbers;