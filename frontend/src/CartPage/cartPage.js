import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Paper} from "@material-ui/core";
import CartStepper from "./cartStepper";
import Store from "../History/Store";
import History from "../History/history";
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
    root: {
        padding: 0,
    },
}));





export default function CartPage() {
    const classes = useStyles();

    const logStat = Store.getLogStatus();
    const [logState, setLogState] = React.useState(logStat);
    const logStatus = logState;

    return (
        <div>
            <Paper className={classes.root}>
              <CartStepper/>
            </Paper>
        </div>
    )
}
