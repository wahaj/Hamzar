import React from 'react';
import MainPricingTable from "./MainPricingTable";
import {Container, makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import image from '../HomePage/ProductList/image.jpeg'
import image2 from "../HomePage/ProductList/image2.jpg";
import MainListRow from "../HomePage/ProductList/MainListRow";
import ProductPic from "./ProductPic";
import StarRatingComponent from 'react-star-rating-component'

const tileDataArray = [
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
    {
        img: image2,
        title: 'Image2',
        author: 'author2',
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
    {
        img: image2,
        title: 'Image2',
        author: 'author2',
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
    {
        img: image,
        title: 'Image',
        author: 'author',
    },
]

const useStyles = makeStyles(theme => ({
    parentContainer:{
        display:'flex',
        border:'0px solid red',
        paddingBottom:'2%',
        paddingTop:'1%',
        width:'80%%'
    },
    productPic: {
        display:'flex',
        height: '400px',
        width: '25%',
        maxWidth:'400px',
        border:'0px solid blue',
    },
    priceTable: {
        height: '100%',
        width: '50%',
        border:'0px solid orange',
    },
    customerReview: {
        height: '50%',
        width: '100%',
        border:'0px solid green',
    },
    relativeProducts: {
        display:'flex',
        height: '50%',
        width: '100%',
        border:'0px solid yellow',
        marginBottom:'5%'
    },
    productInfo: {
        height: '30%',
        width: '100%',
        border:'0px solid Gray',
    },
    extras: {
        height: '50%',
        width: '100%',
        border:'0px solid purple',
    },
    image:{
        display:'flex',
        border:'0px solid Gray',
    },
    productList:{
        paddingBottom:5,
    },
    productName:{
        paddingTop:'2%',
        textDecoration:'underline',
        textAlign:'center',
        color:'rgba(0,11,206,0.3)',
    },
    headings:{
        textAlign:'center',
        color:'rgba(0,11,206,0.3)',
    },
    productDescription:{
        height: '50%',
        width: '100%',
        border:'0px solid blue',
        textAlign:'center',
    },
    details:{
        marginLeft:'3%',
        marginRight:'3%',
    },
    rating:{
        display:'flex',
        border:'0px solid black',
        justifyContent:'center',
        width:'100%',
    },
}));

function ProductPage(){
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.productName}>Name Of Product</h1>
            <div>
                <Grid container direction="column" alignItems="center" justify="center" className={classes.parentContainer} spacing='2'>
                    <Grid key='productInfo' item className={classes.productInfo}>
                        <Grid container direction="row" alignItems="center" justify="center" spacing='2'>
                            <Grid key='productPic' item className={classes.productPic}>
                                <Grid container direction="column" alignItems="center" justify="center" spacing='2'>
                                    <Grid item key='picture' style={{display: 'block'}}>
                                        <ProductPic className={classes.image} />
                                    </Grid>
                                    <Grid item key='rating' className={classes.rating}>
                                        <StarRatingComponent name='productRating' starCount={5} value={3} editing={false} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid key='priceTable' item className={classes.priceTable} >
                                <MainPricingTable />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid key='extras' item className={classes.extras}>
                        <Grid container direction="column" alignItems="center" justify="center" spacing='2'>
                            <Grid key='productDescription' item className={classes.productDescription}>
                                <h1 className={classes.headings}>Details</h1>
                                <p className={classes.details}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida.
                                    Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus magna fringilla. Volutpat maecenas volutpat
                                    blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sagittis orci a
                                    scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl suscipit. Sed adipiscing diam donec adipiscing tristique risus
                                    nec feugiat in. Fusce ut placerat orci nulla. Pharetra vel turpis nunc eget lorem dolor.
                                    Tristique senectus et netus et malesuada.
                                    Etiam tempor orci eu lobortis elementum nibh tellus molestie. Neque egestas congue quisque egestas.
                                    Egestas integer eget aliquet nibh praesent tristique.
                                    Vulputate mi sit amet mauris. Sodales neque sodales ut etiam sit.
                                    Dignissim suspendisse in est ante in. Volutpat commodo sed egestas egestas.
                                    Felis donec et odio pellentesque diam. Pharetra vel turpis nunc eget lorem dolor sed viverra.
                                    Porta nibh venenatis cras sed felis eget. Aliquam ultrices sagittis orci a. Dignissim diam quis enim lobortis.
                                    Aliquet porttitor lacus luctus accumsan. Dignissim convallis aenean et tortor at risus viverra adipiscing at.
                                </p>
                            </Grid>
                            <Grid key='customerReview' item className={classes.customerReview}>
                                <h1 className={classes.headings}> Customer Review </h1>
                            </Grid>
                            <Grid key='relatedProducts' item className={classes.relativeProducts}>
                                <MainListRow className={classes.productList} object={{tileData : tileDataArray, listTitle:'Related Objects'}} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )

}

export default ProductPage;

