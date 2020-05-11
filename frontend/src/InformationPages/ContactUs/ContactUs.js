import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Container} from "@material-ui/core";
import  Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import image1 from './chat.png'
import img1 from "../AboutUsPage/aboutUs1.png";
import History from '../../History/history'
import img2 from './17687.jpg'

const useStyles = makeStyles(theme=>({
    root:{
        display:'flex',
        backgroundColor: theme.palette.background.paper,
        alignContent:'center',
        justufy:'flex-center',
        margin:'4% 4% 4% 4%',
    },
    heading1:{
        color:'rgba(0,11,206,0.49)',
        textAlign:'center',
        display:'block',
        width:'100%',
    },
    heading2:{
        color:'rgba(0,11,206,0.49)',
        textAlign:'center',
        width:'100%',
    },
    heading3:{
        color:'rgba(0,11,206,0.49)',
        textAlign:'center',
        display:'none',
    },
    heading4:{
        color:'rgba(0,11,206,0.49)',
        textAlign:'center',
        width:'100%',
    },
    heading5:{
        color:'rgba(0,11,206,0.49)',
        textAlign:'center',
        display:'none',
    },
    heading6:{
        color:'rgba(0,11,206,0.49)',
        textAlign:'center',
    },
    heading7:{
        color:'rgba(0,0,0,0.49)',
    },
    button1:{
        backgroundColor:'rgba(20,34,198,0.2)',
        borderRadius: 0,
        [theme.breakpoints.up('md')]: {
            borderRadius: 300,
        },
        width:'100%',
    },
    button2:{
        backgroundColor:'rgba(20,34,198,0.2)',
        borderRadius: 0,
        [theme.breakpoints.up('md')]: {
            borderRadius: 300,
        },
        width:'100%',
    },
    adjacentCols:{
        maxWidth:'50%',
        [theme.breakpoints.up('md')]: {
            width:'30%',
        },
    },
    upperInfo:{
        height:'auto'
    },
    control2:{
        marginTop:'3%',
    },
    lastField:{
        width:'100%',
    },
    firstMain:{
        width:'100%',
    },
    image2:{
      width:'100%',
    },
}))

export default function ContactUs(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container direction='column' alignItems='strech' >
                <Grid item key='0'>
                    <img className={classes.image2} alt="complex" src={img2} />
                </Grid>
                <Grid item  key='1' className={classes.firstMain}>
                    <Grid container className={classes.upperInfo} direction='column' justify="space-evenly"  alignItems="stretch">

                        <Grid item key='1'>
                            <Typography className={classes.heading1} variant='h2'>
                                <b>Hi, how can we help you?</b>
                            </Typography>
                        </Grid>

                        <Grid item key='2' className={classes.control2}>
                            <Grid container direction='row'  justify="space-evenly"  alignItems="stretch">
                                <Grid item key='2'  className={classes.adjacentCols}>
                                    <Grid container direction='column'>
                                        <Grid item key='2' >
                                            <Button variant="contained" className={classes.button1} onClick={()=>{History.push('/track-order')}}>
                                                <Typography className={classes.heading2} variant='h3'>
                                                    I want to know where my order is
                                                </Typography>
                                            </Button>
                                        </Grid>
                                        <Grid item key='3'>
                                            <Typography className={classes.heading3} variant='h5'>
                                                Get status update about your order with our tracking tools
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item key='2' className={classes.lastField}>
                    <Grid container direction='row' alignItems='center' justify='space-evenly'>
                        <Grid item key = 'contactImage'>
                            <img className={classes.aboutInsideImage} alt="complex" src={image1} />
                        </Grid>
                        <Grid item key='6'>
                            <grid container direction='column' alignItems='center' justify='space-evenly'>
                                <Grid item key='8'>
                                    <Typography className={classes.heading6} variant='h2'>
                                        <b>Contact us</b>
                                    </Typography>
                                </Grid>
                                <Grid item key='7'>
                                    <Typography className={classes.heading7} variant='h4'>
                                        Can't find the answer you are looking for? Contact us
                                    </Typography>
                                </Grid>
                                <Grid item key='7'>
                                    <Typography className={classes.heading7} variant='h4'>
                                        We are 24/7 available for your help
                                    </Typography>
                                </Grid>
                                <Grid item key='7'>
                                    <Typography className={classes.heading7} variant='h4'>
                                        If you have any queries or you want our help contact us
                                    </Typography>
                                </Grid>
                                <Grid item key='7'>
                                    <Typography className={classes.heading7} variant='h4'>
                                        Contact # : +92 302 4554944
                                    </Typography>
                                </Grid>
                                <Grid item key='7'>
                                    <Typography className={classes.heading7} variant='h4'>
                                        Email us : hamzar.books@gmail.com
                                    </Typography>
                                </Grid>
                            </grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}
