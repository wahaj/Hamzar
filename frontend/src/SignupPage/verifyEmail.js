import React, {useEffect} from 'react';
import {Paper} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import History from './../History/history'
import Alert from '@material-ui/lab/Alert';
import Store from '../History/Store'



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

export default function VerifyEmail(props){
    const {match} = props
    const classes = useStyles();
    const [state, setState] = React.useState({
        userId: match.params.user_id  ,
        timeStamp: match.params.timestamp,
        signature: match.params.signature,
        message: "",
    });

    function handleVerification(){
      fetch('https://hamzar.com/api/v1/verify-registration/', {
          headers: {
              'Content-Type': 'application/json',
              Accept:'application/json',
          },
          cache:'default',
          method: 'POST',
          withCredentials: true,
          credentials: "include",
          body: JSON.stringify({'user_id':state.userId,'timestamp': state.timeStamp,'signature':state.signature })
      })
          .then(res =>{
                  Store.setLogStatus(true)
                  History.push("/");
                  console.log(res)
          })
          .catch((err)=>setState({message:"Sorry your email is not verified. Please try again later", }));
    }

    useEffect(()=>{
      console.log("user_id : %s ",state.userId);
      if(state.userId && state.userId !== null && state.userId!==""){
        const ans = handleVerification()
      }else{
        setState({message: "To Complete registration you will soon receive an email"})
      }

    },[])

    function handleChange(event){
        const {value} = event.target
        setState({orderNo: value})
    }

    function handleChange(event){
        const {value} = event.target
        setState({orderNo: value})
    }

    return(
        <Paper className={classes.paperContainer}>
            <Box display='flex' alignItems="center" className={classes.backgroundContainer}>
                <Box display='flex' justifyContent="center" className={classes.fixedPosition}>
                    <form className={classes.center} noValidate autoComplete="off">
                        <Box display='flex' alignItems="center" justifyContent="center">
                            <Alert severity="info">{state.message}</Alert>
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
