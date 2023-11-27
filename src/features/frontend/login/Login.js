import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import API from '../../../api/API';
import { add } from '../../../slices/userSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
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

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLogin = e => {
        const { email, password } = values;
        API.post('/user/auth', { email, password })
            .then(response => {
                dispatch(add(response.data.data));
                console.log("Response: ", response);
                sessionStorage.setItem("token", response.headers['x-token']);
                sessionStorage.setItem("user", JSON.stringify(response.data.data));
                history.push('/secured/');
            })
            .catch(err => {
                console.log("Error: ", err);
            })
    }

    return (<>
        <Container maxWidth="sm" className={classes.margin}>
            <Grid>




                <Card className={classes.root}>
                    <CardContent>
                        <h3 className={classes.title}>Doctor's Login </h3>
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            variant="outlined"
                            onChange={handleChange}
                        />

                        <FormControl
                            fullWidth
                            className={classes.margin}
                            variant="outlined"
                        >
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                fullWidth
                                name="password"
                                onChange={handleChange}
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}

                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>

                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" onClick={handleLogin}>
                            Login
</Button>
                    </CardActions>
                </Card>

            </Grid>
        </Container>
    </>);
}

export default Login;
