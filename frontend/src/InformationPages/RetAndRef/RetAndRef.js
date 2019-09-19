import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Container} from "@material-ui/core";
import career1 from './return.png';
import career2 from './return and refund.png';
import  Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor : 'rgba(255,255,255,0)',
        margin:'',
        alignItems:'center',

    },
    main_root:{
        backgroundColor : 'rgba(255,255,255,0)',
        display:'flex'
    },
    email:{
        color:'rgb(0,11,255)',
        textDecoration:'underline'
    },
    images1:{
        width: '100%',
        maxheight:'500px',
        height:'600px',
        overflow:'hidden',
    },
    images2:{
        width: '30%',
        height: '50%',
        display:'flex',
        marginLeft:'30%'

    },
    headings:{
        color:'rgba(0,11,206,0.49)',
        textAlign:'center',
    },
    detail:{
        color:'rgba(0,0,0,0.37)',
        textIndent:'0px',
        textSpacing:"3px",
        lineHeight:'30px',
        marginLeft:'10%',
        marginRight:'10%',

    },
    elements:{
        color:'rgba(0,11,206,0.49)',
        textAlign:'center',
    },
    upperPart:{
        marginTop:'5%',
    },
    lowerPart:{
        marginBottom:'5%',
    },
}))

export default function Career(){
    const classes = useStyles();
    return(
        <div className={classes.main_root}>
            <div className={classes.root}>
                <div className={classes.upperPart}>
                    <h1 className={classes.headings}>Returns Policy</h1>
                    <h2 className={classes.detail}>
                        1 : If your product is defective / damaged or incorrect/incomplete at the time of delivery, please contact us within
                            the applicable return window. Your product
                            may be eligible for refund or replacement depending on the product condition.
                        <br/>
                        2 : Please note that some products
                            are not eligible for a return if the product is “No longer needed." </h2>
                </div>
                <div className={classes.lowerPart}>
                    <img className={classes.images2} src={career1} />
                    <h1 className={classes.headings}>Valid reasons to return an item</h1>
                    <h2  className={classes.detail}>
                        1 : Delivered Product is damaged (physically destroyed or broken) / defective (dead on arrival)
                        <br/>
                        2 : Delivered Product is incorrect (presentation different on website) / incomplete (missing parts)
                        <br/>
                        3 : Delivered Product is “No longer needed” (you no longer have a use for the product / you have changed your mind about the purchase / the size of
                        a fashion product does not fit / you do not like the product after opening the package) - eligible for selected products only.</h2>
                </div>
            </div>
        </div>
    )
}