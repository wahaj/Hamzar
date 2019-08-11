import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
}));

function priceRow(qty, unit) {
    return qty * unit;
}

    function createRow(desc, qty, unit) {
        const price = priceRow(qty, unit);
        return { desc, qty, unit, price };
    }

function subtotal(items) {
    return items.map(item => (parseInt(item.price.split(" ")[1],10) * item.quantity)).reduce((sum, i) => sum + i, 0);
}




export default function CheckOut(props) {
    const classes = useStyles();
    const {data} = props

    const invoiceSubtotal = subtotal(props.data);
    const invoiceTotal = invoiceSubtotal;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Book Name</TableCell>
                        <TableCell align="right">Qty.</TableCell>
                        <TableCell align="right">Type</TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(row => (
                        <TableRow key={row.name}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell align="right">{row.quantity}</TableCell>
                            <TableCell align="right">{row.type}</TableCell>
                            <TableCell align="right">{"Rs." + String(parseInt(row.price.split(" ")[1],10) * row.quantity)}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell align="right">{"Rs. " + String(invoiceTotal)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    );
}