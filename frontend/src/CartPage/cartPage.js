import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Paper} from "@material-ui/core";
import MyNavbar from "./../Navbars/Navbar/mynavbar";
import MenuBar from "./../Navbars/Menubar/menubar";
import Footer from "./../Navbars/Footer/BottomBar"
import CartStepper from "./cartStepper";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 5),
    },
}));

export default function CartPage() {
    const classes = useStyles();

    return (
        <div>
            <MyNavbar/>
            <MenuBar/>
            <Paper className={classes.root}>
                <CartStepper/>
            </Paper>
            <Footer/>
        </div>
    )
}