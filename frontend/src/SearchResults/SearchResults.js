import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Collapse, Grid} from "@material-ui/core";
import { ButtonBase } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import StarRatingComponent from "react-star-rating-component";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    mainElement:{
        display:'block',
        margin:'3% 15% 3% 15%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0 3px 5px 8px rgba(128, 128, 128, .3)',
    },
    nothing:{
        backgroundColor:'rgba(204,204,204,.3)',
        width:'100%',
        minHeight:'20%',
        paddingBottom:'10px',
        border:'0px solid black',
        overflow:'hidden',
    },
    toRight:{
        float:'right',
    },
    details:{
        width:'80%'
    },
    contains:{
        width:'100%',
        height:'100%',

    },
    bookName:{
        display:'flex',
        overflow:'hidden',
        width:'100%',
        maxHeight:'50px',
        border:'0px solid blue',
        padding: 0,
    },
    Author:{
        display:'flex',
        overflow:'hidden',
        border:'0px solid red',
        maxHeight:'50px',
        alignContent:'top',
        textDecorationColor:'gray',
    },
    price:{
        paddingTop:'2%',
        display:'flex',
        overflow:'auto',
        border:'0px solid black',
    },
    image:{
        borderRadius: '10px',
        border:'0px solid green',
    },
    imageField:{
        border:'0px solid black',
        overflow:'hidden',
    },
    authorText:{
        color:'gray',
        width:'100%',
        height:'100%',
        border:'0px solid black'
    },
    test: {
        height: 'auto',
        width:'100%',
        border:'0px solid red',
    },
    rating :{
        paddingTop:'1%',
    },
    singleProduct:{
        backgroundColor:'rgba(204,204,204,.3)',
        width:'auto',
        padding:'2% 2% 2% 2%',
        border:'0px solid black',
        overflow:'hidden',
    },

}));
const theme = {
    spacing: value => value ** 2,
}

export default function SearchResults(){
    const classes = useStyles();
    return(
        <div className={classes.mainElement}>
            <Grid container
                  className={classes.singleProduct}
                  direction='row'
                  justify='flex-start'
                  alignItems='stretch'
                  spacing='2'
            >
                <Grid item key='image' className={classes.imageField}>
                    <ButtonBase className={classes.contains}>
                        <img className={classes.image} alt="complex" src="data:image/jpeg;base64,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" />
                    </ButtonBase>
                </Grid>
                <Grid item key='details' className={classes.details}>
                    <Grid container
                          className={classes.contains}
                          direction='column'
                          justify='flex-start'
                          alignItems='stretch'
                          spacing='0'
                    >
                        <Grid item key='bookName'  className={classes.bookName} spacing={0} >
                            <Typography variant="h4" >
                                The Prince
                            </Typography>
                        </Grid>
                        <Grid item key='Author' className={classes.Author} >
                            <Typography  variant="h7" className={classes.authorText} >
                                niccolo machiavelli
                            </Typography>
                        </Grid>
                        <Grid item key='rating' className={classes.rating}>
                            <StarRatingComponent name='productRating' starCount={5} value={3} editing={false} />
                        </Grid>
                        <Grid item key='price' className={classes.price}>
                            <Button variant='contained' color='primary' className={classes.priceButton}>
                                price details
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
