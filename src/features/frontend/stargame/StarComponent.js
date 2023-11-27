import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './stargame.css';

import classnames from 'classnames';

const StarComponent = (props) => {
    console.log('props', props);

    console.log("props.starArray===> " + props.starArray);

    const star_rectangle_style = classnames(
        {
            'star-rectangle' : true,
            'winning-status' : props.winningStatus ? true : false
        }
    )

    return (<>
        <h4>Star Component</h4>

        <Row className={star_rectangle_style}>

            {
                props.starArray.map(no => {
                    return (
                        <>
                            <Col xs={4}>

                                <div className="star-display">*</div>

                            </Col>

                        </>
                    );
                }
                )
            }


        </Row>


    </>);
}

export default StarComponent;