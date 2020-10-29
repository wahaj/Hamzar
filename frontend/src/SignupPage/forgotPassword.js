import React, {useEffect} from 'react';
import {Paper} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import History from './../History/history'
import Alert from '@material-ui/lab/Alert';
import Store from '../History/Store'
import CircularProgress from '@material-ui/core/CircularProgress'


const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formPosition: {
        width: '100%',
        height: '20%'
    }
};

const useStyles = makeStyles(theme =>({
    paperContainer: {
        padding: 0,
        backgroundColor: "#B0BEC5",
        width: '100%',
        [theme.breakpoints.up('xs')]: {
            height: "55%"
        },
        [theme.breakpoints.up('md')]: {
            height:'100%',
        },
        [theme.breakpoints.up('lg')]: {
            height: "130%",
        },
    },
    spinner : {
      marginTop : '2%',
      marginBottom : '2%',
    },
    backgroundContainer: {
        backgroundImage: 'url(https://source.unsplash.com/random/1440x761)',
        width: '100%',
        height: '100%',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },

    fixedPosition: {
        width: '100%',
        paddingBottom: "10%",

    },
    margin: {
        margin: theme.spacing(2),
        height: 56,
    },
    textField: {
        margin: 0,
        padding: 0,
        backgroundColor: "#ECEFF1",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    }
}))

export default function ForgotPassword(props){
    const {match} = props
    const classes = useStyles();
    const [state, setState] = React.useState({
        message: "",
        loading : false,
        error : false,
        email : "",
    });

    function sendMail(){
      fetch(`${process.env.REACT_APP_API_ULR}/send-reset-password-link/`, {
          headers: {
              'Content-Type': 'application/json',
              Accept:'application/json',
          },
          cache:'default',
          method: 'POST',
          withCredentials: true,
          credentials: "include",
          body: JSON.stringify({"login":state.email})
      })
          .then(res =>{
                  setState({loading : false})
                  History.push("/");
                  console.log(res)
          })
          .catch((err)=>setState({message:"Sorry mail could not be sent right now. Please check your internet connection.",error:true,loading:false}));
    }


    function handleChange(event){
        const {value} = event.target
        setState({email: value})
    }

    function handleClick(event){
      event.preventDefault();
      setState({loading : true})
      sendMail();
    }

    return(
        <Paper className={classes.paperContainer}>
            <Box display='flex' alignItems="center" className={classes.backgroundContainer}>
                <Box display='flex' justifyContent="center" className={classes.fixedPosition}>
                    <form className={classes.center} noValidate autoComplete="off">
                        <Box display='flex' alignItems="center" justifyContent="spaace-around">

                            <TextField
                                id="outlined-name"
                                label="Registered Email Address"
                                margin="normal"
                                variant="filled"
                                className={classes.textField}
                                value={state.email}
                                onChange={handleChange}
                            />
                            <Button variant="contained" size="large" color="black" className={classes.margin} onClick={handleClick}>
                              {
                                state.loading ?
                                  <div className={classes.spinner}>
                                    <CircularProgress/>
                                  </div>
                                :
                                  "Send Mail"
                              }
                            </Button>
                            {
                              state.error ?
                                <Alert severity="alert">{state.message}</Alert>
                                :
                                null
                            }
                        </Box>
                    </form>
                </Box>
            </Box>
        </Paper>

/*
        <Paper style={styles.paperContainer}>
            {/!**!/}

        </Paper>*/
    )
}
