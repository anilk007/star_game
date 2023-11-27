import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HostpitalIcon from '@material-ui/icons/LocalHospital';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.primary.contrastText,
        marginLeft: 10
    }
}));

const Header = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <HostpitalIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Administrtor Portal
                    </Typography>
                    <Box>

                        <div>
                            <Link className={classes.link} to="/">Home</Link>
                            <Link className={classes.link} to="/todolist">To Do List</Link>
                            <Link className={classes.link} to="/mycounter">My Counter</Link>

                            <Link className={classes.link} to="/viewposts">View Posts</Link>


                            <Link className={classes.link} to="/viewallgames">View All games</Link>
                            <Link className={classes.link} to="/managegames">Manage Games</Link>
                            <Link className={classes.link} to="/card">Card</Link>

                            {/* <Link className={classes.link} to="/simplehtml">Simple HTML</Link> */}

                            <Link className={classes.link} to="/setfocus">Set Focus</Link>

                            {/* <Link className={classes.link} to="/spread">Spread-Operator</Link> */}

                            <Link className={classes.link} to="/stargame">Star Game</Link>

                            <Link className={classes.link} to="/postdata">Post Data</Link>



                            <Link className={classes.link} to="/readjson">Read Json</Link>

                            <Link className={classes.link} to="/login">Login</Link>

                            <Link className={classes.link} to="/nested_table">Nested_Table</Link>


                        </div>

                        <div>




                            <Link className={classes.link} to="/add-element">Add Element</Link>

                            <Link className={classes.link} to="/select-button">Select Button</Link>

                            <Link className={classes.link} to="/rotate-card">Rotate Card</Link>

                            <Link className={classes.link} to="/dice-game">Dice Game</Link>

                            <Link className={classes.link} to="/simple-counter">Simple Counter</Link>

                            <Link className={classes.link} to="/multiple-counter">Multiple Counter</Link>

                            <Link className={classes.link} to="/square-numbers">Square Numbers</Link>

                            <Link className={classes.link} to="/loader">Loader</Link>

                            <Link className={classes.link} to="/myqrcode">MyQRCode</Link>

                            <Link className={classes.link} to="/cardgrid">Material Card Grid</Link>

                            <Link className={classes.link} to="/matlayout">Material Layout</Link>

                            <Link className={classes.link} to="/eshop">Eshoap</Link>

                            <Link className={classes.link} to="/destructureExample">Destructure Example</Link>

                        </div>

                    </Box>


                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Header;