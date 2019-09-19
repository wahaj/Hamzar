import React, {useEffect} from 'react';
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


export default function CheckOut(props) {
    const classes = useStyles();

    const [parent,sParent] = React.useState([]);
    const [child,sChild] = React.useState([]);
    const [basket,sBasket] = React.useState([]);

    const {parentData,childData,basketData,summaryData} = props

    useEffect( ()=> {
        sParent(parentData)
        sChild(childData)
        sBasket(basketData)
    },[]);

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
                    {parent.map((row,index) => (
                        <TableRow key={row.title}>
                            <TableCell>{row.title}</TableCell>
                            <TableCell align="right">{basket[index].quantity}</TableCell>
                            <TableCell align="right">{child[index].attributes[1].value}</TableCell>
                            <TableCell align="right">{summaryData.currency + " " + basket[index].price_excl_tax}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell align="right">{summaryData.currency + " " + summaryData.total_incl_tax_excl_discounts}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    );
}