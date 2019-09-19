import React from 'react';
import {Paper} from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import CartItem from "./CartItem";
import { withStyles} from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import sampleCart from './sampleCart'



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        background: "#73AD21",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 0,
        margin: 0,
    },
    table: {
        background: theme.palette.common.white,
        borderColor: "#90a4ae",
        border: '3px solid'
    },
    bucketItemDetailHead: {
        width: '50%',
    },
    bucketItemPriceHead:{
        width: '20%',
    },
    bucketItemQuantityHead:{
        width: '30%',
    },
}));

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: "#90a4ae",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const cartItems = [

];


export default function OrderChoice(props) {
    const classes = useStyles()
    const {parentData,childData,basketData} = props


    const [cartItem, setCartItem]=React.useState({tileData : cartItems});

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left" className={classes.bucketItemDetailHead}>
                            <b>Basket Item</b>
                        </StyledTableCell>
                        <StyledTableCell align="right" className={classes.bucketItemPriceHead}>
                            <b>Price</b>
                        </StyledTableCell>
                        <StyledTableCell align="right" className={classes.bucketItemQuantityHead}>
                            <b>Quantity</b>
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {/*{parentData.map((item,index)=> <CartItem pdata={item} cdata={childData[index]} bdata={basketData[index]}/>)}*/}
                </TableBody>
            </Table>
        </Paper>
    );
}