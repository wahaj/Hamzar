import React from 'react';
import Background from './ob.jpg'
import {Paper} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import History from './../History/history';
import Alert from '@material-ui/lab/Alert';



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
        backgroundImage: `url(${Background})`,
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

export default function TrackOrder(props){

    const classes = useStyles();
    const [state, setState] = React.useState({
        orderNo: "",
    });

    function handleChange(event){
        const {value} = event.target
        setState({orderNo: value})
    }

    function handleChange(event){
        const {value} = event.target
        setState({orderNo: value})
    }

    function handleClick(){
        History.push(`/track-order/${state.orderNo}`);
    }

    return(
        <Paper className={classes.paperContainer}>
            <Box display='flex' alignItems="center" className={classes.backgroundContainer}>
                <Box display='flex' justifyContent="center" className={classes.fixedPosition}>
                    <form className={classes.center} noValidate autoComplete="off" onSubmit={handleClick}>
                        <Box display='flex' alignItems="center" justifyContent="center">
                          {  //<TextField
                            //    id="outlined-name"
                            //    label="Tracking Number"
                            //    margin="normal"
                            //    variant="filled"
                            //    className={classes.textField}
                            //    value={state.orderNo}
                            //    onChange={handleChange}
                            //>
                            //<Button variant="contained" size="large" color="primary" className={classes.margin} onClick={handleClick}>Track</Button>
                          }

                              <Alert severity="info">This service is not available yet, if youre having trouble please feel free to <a href='/ContactUs'>contact us</a> </Alert>

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
