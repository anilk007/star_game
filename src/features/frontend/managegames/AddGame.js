import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    // bullet: {
    //     display: 'inline-block',
    //     margin: '0 2px',
    //     transform: 'scale(0.8)',
    // },
    title: {
        color: theme.palette.secondary.dark,
        textAlign: 'center'
    },
    pos: {
        marginBottom: 12,
    },
    margin: {
        marginTop: theme.spacing(1),
    },

}));

const AddGame = () => {
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
    });


    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });

    }



    const handleLogin = () => {
        const { gameName, language } = values;

        console.log(gameName);
        console.log(language);

        // API.post('/user/auth', { email, password })
        //     .then(response => {
        //         dispatch(add(response.data.data));
        //         console.log("Response: ", response);
        //         sessionStorage.setItem("token", response.headers['x-token']);
        //         sessionStorage.setItem("user", JSON.stringify(response.data.data));
        //         history.push('/secured/');
        //     })
        //     .catch(err => {
        //         console.log("Error: ", err);
        //     })
    }

    return (<>
        <Container maxWidth="sm" className={classes.margin}>
            <Grid>




                <Card className={classes.root}>
                    <CardContent>

                        <h3 className={classes.title}>Add Game</h3>
                        <TextField
                            fullWidth
                            id="gameName"
                            name="gameName"
                            label="Game Name"
                            type="text"
                            variant="outlined"
                            onChange={handleChange}
                            value="Othello"
                        />


                    </CardContent>

                    <CardContent>


                        <TextField
                            fullWidth
                            id="language"
                            name="language"
                            label="language"
                            type="text"
                            variant="outlined"
                            onChange={handleChange}
                            value="English"

                        />


                    </CardContent>

                    <CardContent>


                        <TextField
                            fullWidth
                            id="market"
                            name="market"
                            label="market"
                            type="text"
                            variant="outlined"
                            onChange={handleChange}
                            value="India"
                        />


                    </CardContent>

                    <CardContent>


                        <TextField
                            fullWidth
                            id="gametype"
                            name="Game Type"
                            label="Choose Game Type"
                            type="text"
                            variant="outlined"
                            onChange={handleChange}
                            value="Standalone"
                        />


                    </CardContent>


                    <CardContent>


                        <TextField
                            fullWidth
                            id="division"
                            name="division"
                            label="division"
                            type="text"
                            variant="outlined"
                            onChange={handleChange}
                            value="A"
                        />


                    </CardContent>


                    <CardActions>

                        <Button variant="contained" color="primary" onClick={handleLogin}>
                            Save
                        </Button>

                        <Button variant="contained" color="primary" onClick={handleLogin}>
                            Cancel
                        </Button>

                        <Button variant="contained" color="primary" onClick={handleLogin}>
                            Save & Configure Game
                        </Button>


                    </CardActions>
                </Card>

            </Grid>
        </Container>
    </>);
}

export default AddGame;
