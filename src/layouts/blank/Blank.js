import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Eshop from '../../features/frontend/eshop/Eshop';

import Home from '../../features/frontend/home/Home';
import Contact from '../../features/frontend/contact/Contact';
import MyCounter from '../../features/frontend/mycounter/MyCounter';
import ViewAllGames from '../../features/frontend/viewallgames/ViewAllGames';
import ManageGames from '../../features/frontend/managegames/ManageGames';
import AddGame from '../../features/frontend/managegames/AddGame';
import TodoList from '../../features/frontend/todolist/TodoList';
import ViewPosts from '../../features/frontend/viewposts/ViewPosts';

import Spread from '../../features/frontend/spread/Spread';
import CardApp from '../../features/frontend/card/CardApp';
import SetFocusComp from '../../features/frontend/setfocus/SetFocusComp';

import StarGame from '../../features/frontend/stargame/StarGame';

import Header from '../../ui/header/Header';
import Login from '../../features/frontend/login/Login';



import ReadJsonComponent from '../../features/frontend/readjson/ReadJsonComponent';

import PostData from '../../features/frontend/postdata/PostData';





import AddElementComponent from '../../features/frontend/addelement/AddElementComponent';

import SelectButtonComponent from '../../features/frontend/selectbutton/SelectButtonComponent';

import RotateCardComponent from '../../features/frontend/rotatecard/RotateCardComponent';

import DiceGameComponent from '../../features/frontend/dicegame/DiceGameComponent';


import SimpleCounter from '../../features/frontend/simplecounter/SimpleCounter';

import MultipleCounterComponent from '../../features/frontend/multiplecounter/MultipleCounterComponent';

import SquareNumbers from '../../features/frontend/squarenumbers/SquareNumbers';

import LoaderComponent from '../../features/frontend/loadercomponent/LoaderComponent';

import MyQRCode from '../../features/frontend/myqrcode/MyQRCode';

import CardGrid from '../../features/frontend/cardgrid/CardGrid';

import MatLayout from '../../features/frontend/matlayout/MatLayout';

import DestructureExample from '../../features/frontend/destructure_example/DestructureExample';

import NestedDataTable from '../../features/frontend/nested_data_table/NestedDataTable';

const Blank = () => {
    return (<>



        <Header />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/postdata">
                <PostData />
            </Route>


            <Route path="/todolist">
                <TodoList />
            </Route>

            <Route path="/destructureExample">
                <DestructureExample />
            </Route>



            <Route path="/viewposts">
                <ViewPosts />
            </Route>



            <Route path="/viewallgames">
                <ViewAllGames />
            </Route>



            <Route path="/addgame">
                <AddGame />
            </Route>


            <Route path="/mycounter">
                <MyCounter />
            </Route>

            <Route path="/managegames">
                <ManageGames />
            </Route>

            <Route path="/contact">
                <Contact />
            </Route>


            <Route path="/card">
                <CardApp />
            </Route>


            <Route path="/spread">
                <Spread />
            </Route>


            <Route path="/setfocus">
                <SetFocusComp />
            </Route>


            <Route path="/stargame">
                <StarGame />
            </Route>


            <Route path='/login'>
                <Login />
            </Route>

            <Route path='/readjson'>
                <ReadJsonComponent />
            </Route>

           

            <Route path='/add-element'>
                <AddElementComponent />
            </Route>

            <Route path='/select-button'>
                <SelectButtonComponent />
            </Route>


            <Route path='/rotate-card'>
                <RotateCardComponent />
            </Route>
            
            
            <Route path='/dice-game'>
                <DiceGameComponent />
            </Route>
            
            

            
            <Route path='/simple-counter'>
                <SimpleCounter />
            </Route>
            
            
            <Route path='/multiple-counter'>
                <MultipleCounterComponent />
            </Route>
            
            <Route path='/square-numbers'>
                <SquareNumbers />
            </Route>

            <Route path='/loader'>
                <LoaderComponent />
            </Route>
              
            <Route path='/myqrcode'>
                <MyQRCode />
            </Route>

            <Route path='/cardgrid'>
                <CardGrid />
            </Route>
              
            <Route path='/matlayout'>
                <MatLayout />
            </Route>
              
            
            <Route path='/eshop'>
                <Eshop />
            </Route>

            <Route path='/nested_table'>
                <NestedDataTable />
            </Route>
              

        </Switch>

    </>);
}

export default Blank;