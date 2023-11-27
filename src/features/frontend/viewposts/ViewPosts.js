import React from 'react';
import AllPosts from '../viewposts/AllPosts';

import SelectedPosts from '../viewposts/SelectedPosts';

const ViewPosts = () => {

    // const fruits = ["apple", "banana", "orange"];

    // rest operator
    // const subFruits = [...fruits, ...rest ]

    // spread operator
    //  const spreadFruits = [...fruits]; 

    return (<>
        <h1>View Posts Component</h1>

        <SelectedPosts />

        <AllPosts />


    </>);
}

export default ViewPosts;