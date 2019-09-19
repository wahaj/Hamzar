import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OrderStepper from './orderStepper'
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Paper} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    backgroundContainer: {
        backgroundColor: "#FFF9C4",
        width: '100%',
        height: '80%',
        backgroundSize: '100% 100%',
    },
    container:{
        width:'98%',
        padding: '1%',
        /*backgroundColor: '#1c9e28',*/
        alignItems: 'top',
    },
    gridList: {
        /*backgroundColor: '#dd25fe',*/
        width: '98%',
        height: 'auto',
        overflow: 'hidden',

    },

    grid: {
        width: '100%',
    },


    testY:{
        maxWidth: '98%',
        /*backgroundColor: '#fe2632',*/
        display: 'flex',
        justifyContent: 'left',
        margin: '1%',
    },
    testZ:{
        /*backgroundColor: '#339b9e',*/
        minWidth: 100,
        height: 10,
        display: 'flex',
        flexGrow: 1,

    },
    paper:{
        flexGrow: 1,
        margin: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paperx:{
        flexGrow: 1,
        margin: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'top',
    },
    header: {
        margin: 5,
        flexGrow: 1,
    },

    card: {
        width: '50%',
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    topo: {
        backgroundColor: '#12e5fe',
        width: "90%",
        display: "block",
        justifyItems: "right",
        padding: 4,
    },
    topoa: {
        padding: 4,
        backgroundColor: '#fef861',
    },
    x:{
        margin: 2,
        padding: 0,
        height: 30,
        fontSize:13,
    },
    y:{
        display: 'inline',
        margin: 0,
        padding: 0,
        height: 30,
        backgroundColor: '#fef861',
        alignContent: 'top',
    }

}));


export default function OrderStatus({match}) {
    const classes = useStyles();
    const product = {"TrackingNumber":"123","Name": "The Republic", "Author": "Plato","DeliveryAddress": "XYZ" ,"OrderDate" : "12.121.121"}
    return (
        <Box display='flex' alignItems="top" justifyContent="center"  className={classes.backgroundContainer}>
            <Container className={classes.container}>
                <GridList container className={classes.gridList} cellHeight={80} spacing={2}>
                    <Grid item className={classes.testY} cols={2} rows={1}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5">
                               Order Status for book {match.params.ids}
                           </Typography>
                        </Paper>
                    </Grid>
                    <Grid item className={classes.testY} cols={2} rows={2} >
                        <Paper className={classes.paperx}>
                            <Box alignItems="top" justifyContent="center" className={classes.testZ}>
                                <OrderStepper/>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item className={classes.testY} cols={1} rows={4} >
                        <Card className={classes.card}>
                            <CardContent style={{paddingLeft: 15, paddingTop: 20}}>
                                <div className={classes.root}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={12} >
                                            <Typography variant="h5" component="h2"  gutterBottom>
                                                Product Details
                                            </Typography>
                                        </Grid>

                                        {
                                            Object.keys(product).map((key,value)=>(
                                                <Grid container>
                                                    <Grid item xs={8} className={classes.x} >
                                                        <Typography variant="p">
                                                            {key}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={3} className={classes.x} >
                                                        <Typography style={{textAlign: "right", fontSize: 13}} variant="h6">
                                                            {value}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            ))
                                        }



                                        {/*<Grid item xs={3} className={classes.x} >
                                            <Typography style={{textAlign: "right", fontSize: 13}} variant="h6">
                                                {product.TrackingNumber}
                                            </Typography>
                                        </Grid>*/}


                                    </Grid>
                                </div>
                                {/*<Grid>
                                    <Grid>

                                    </Grid>
                                    <Grid container className={classes.topo}>
                                        <Grid item className={classes.topoa} xs={8}>
                                            <p style={{display: "inline",backgroundColor: '#fe42f2'}}>Tracking Number:</p>
                                        </Grid>
                                        <Grid item className={classes.topoa} xs={4}>
                                            <h5 style={{display: 'inline', backgroundColor: '#fe42f2'}}>{product.TrackingNumber}</h5>
                                        </Grid>
                                    </Grid>


                                </Grid>
*/}





                                {/*<Typography style={{display: "block"}} variant="p">
                                    Book Name: {product. Name}
                                </Typography>
                                <Typography style={{display: "block"}} variant="p">
                                    Book Author: {product.Author}
                                </Typography>
                                <Typography style={{display: "block"}} variant="p">
                                    Delivery Address: {product.DeliveryAddress}
                                </Typography>
                                <Typography style={{display: "block"}} variant="p">
                                    Delievery Date: {product.OrderDate}
                                </Typography>*/}
                            </CardContent>
                            {/*<CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>*/}
                        </Card>
                    </Grid>


                </GridList>
            </Container>
        </Box>
    );
}