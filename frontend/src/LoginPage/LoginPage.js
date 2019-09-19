import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useInput } from './input-hook';
import History from './../History/history'
import Store from '../History/Store'


const useStyles = makeStyles(theme => ({
    root: {
        height: '81%',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function LoginForm(props) {
    const classes = useStyles();
    const { value:email, bind:bindEmail, reset:resetEmail } = useInput('');
    const { value:password, bind:bindPassword, reset:resetPassword } = useInput('');
    const [state, setState] = React.useState({
        email: "",
        password: "",
        isError:false,
    });
    const {uls} = props;
    function handle_login(e) {
        setState({isError:false})
        e.preventDefault()
        fetch('http://192.168.100.1:8000/api/login/', {
            headers: {
                'Content-Type': 'application/json',
                Accept:'application/json',
            },
            cache:'default',
            method: 'POST',
            body: JSON.stringify({'username':email,'password': password}),
            withCredentials: true,
            credentials: "include",
        })
            .then((res) => res.json())
            .then(res =>{
                alert("ali")
                if (res.status === 200){
                    Store.setLogStatus(true)
                    uls();
                    /*History.push("/");*/
                    setState({isError:false})
                }
                else{
                    setState({isError:true})
                    alert('The password or email entered is in correct')
                }
            })
            .catch((err)=>alert(err));
    };



    const handleChange = (name, editState) => event => {
        setState({ ...state, [name]: editState.name });
    };


    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        SignIn
                    </Typography>
                    <form className={classes.form} onSubmit={(e)=>handle_login(e)} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            {...bindEmail}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            {...bindPassword}
                        />

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type={'submit'}
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}