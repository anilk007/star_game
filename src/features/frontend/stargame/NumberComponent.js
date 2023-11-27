import React, { Fragment, useEffect, useState, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import './stargame.css';

const NumberComponent = (props) => {

    const [numbers, setNumbers] = useState([]);

    const noRef = useRef(null);

    const range = () => {

        let tempNumbers = [];

        for (let i = 1; i < 10; i++) {
            tempNumbers.push(i);
        }

        setNumbers(tempNumbers);

    }


    useEffect(() => {
        range();
    }, [])

    let numberRef = "";
  
    console.log("numberRef ", numberRef);

    return (<>
        <h4>Number Component</h4>
        <Row className="number-rectangle">



            {

                numbers.map((no, index) => {


                    return (
                        <Fragment key={index} >
                            <Col xs={4}>

                                <div ref={noRef} onClick={(e) => props.validateClickedNo(e, no)}
                                    className="number-display">{no}</div>


                            </Col>
                        </Fragment>
                    );
                }
                )

            }

        </Row>

    </>);


}

export default NumberComponent;