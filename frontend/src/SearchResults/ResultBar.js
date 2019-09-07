import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Collapse, Grid} from "@material-ui/core";
import { ButtonBase } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import StarRatingComponent from "react-star-rating-component";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    mainElement:{
        display:'block',
        backgroundColor:'rgba(204,204,204,.3)',
        boxShadow: '0 3px 5px 8px rgba(128, 128, 128, .3)',
        margin :'0% 0% 0% %',
        width:'100%',
        height:'300px',
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
        width:'auto'
    },
    contains:{
        width:'100%',
        height:'100%',
        border:'0px solid blue',

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
        marginTop:'2%',
        paddingTop:'0%',
        display:'block',
        overflow:'hidden',
        border:'0px solid black',
        textDecorationColor: 'blue',
    },
    image:{
        borderRadius: '10px',
        border:'0px solid green',
        maxHeight:'200px',
        maxWidth:'200px',
    },
    imageField:{
        border:'0px solid black',
        overflow:'hidden',
    },
    authorText:{
        color:'gray',
        height:'100%',
        border:'0px solid black'
    },
    priceDetails:{
        color:'black',
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
        width:'100%',
        height:'100%',
        padding:'2% 2% 2% 2%',
        border:'0px solid black',
        overflow:'hidden',
    },

}));
const theme = {
    spacing: value => value ** 2,
}

export default function ResultBar(props){
    const classes = useStyles();
    return(
        <div className={classes.mainElement}>
            <Grid container
                  className={classes.singleProduct}
                  direction='row'
                  justify='flex-start'
                  alignItems='stretch'
                  spacing='1'
            >
                <Grid item key='image' className={classes.imageField}>
                    <ButtonBase className={classes.contains}>
                        <img className={classes.image} alt="complex" src={(props && props.object) ? props.object.images[0].original: 'http://192.168.100.10:8000/media/image_not_found.jpg' } />
                    </ButtonBase>
                </Grid>
                <Grid item key='details' className={classes.details}>
                    <Grid container
                          className={classes.contains}
                          direction='column'
                          justify='flex-start'
                          alignItems='flex-start'
                          spacing='0'
                    >
                        <Grid item key='bookName'  className={classes.bookName} spacing={0} >
                            <Typography variant="h3" >
                                {props.object.title}
                            </Typography>
                        </Grid>
                        <Grid item key='Author' className={classes.Author} >
                            <Typography  variant="h7" className={classes.authorText} >
                                author name
                            </Typography>
                        </Grid>
                        <Grid item key='rating' className={classes.rating}>
                            <StarRatingComponent name='productRating' starCount={5} value={3} editing={false} />
                        </Grid>
                        <Grid item key='hard cover' className={classes.price}>
                            <Typography  variant="h6" className={classes.priceDetails} >
                                <b style={{color:'rgba(0,11,206,0.49)'}}>Hard Cover : </b>  Rs. 1275 - 1500
                            </Typography>
                        </Grid>
                        <Grid item key='paper back' className={classes.price}>
                            <Typography  variant="h6" className={classes.priceDetails} >
                                <b style={{color:'rgba(0,11,206,0.49)'}}>Paper Back : </b>  Rs. 1275 - 1500
                            </Typography>
                        </Grid>
                        <Grid item key='quote' className={classes.price}>
                            <Typography  variant="h6" className={classes.priceDetails} >
                                <b>( </b>Offer in Old and New<b> ) </b>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
