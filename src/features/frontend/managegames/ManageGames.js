import React from 'react';

import ViewAllGames from '../viewallgames/ViewAllGames';

import { Link } from 'react-router-dom';

const ManageGames = () => {
    return (<>
        <h1>Manage Games Component</h1>
        <Link to="/addgame">Add Game</Link>

        <ViewAllGames />
    </>);
}

export default ManageGames;