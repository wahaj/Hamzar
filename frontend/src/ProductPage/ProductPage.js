import React, {useEffect} from 'react';
import MainPricingTable from "./MainPricingTable";
import {Container, makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import image from '../HomePage/ProductList/image.jpeg'
import image2 from "../HomePage/ProductList/image2.jpg";
import MainListRow from "../HomePage/ProductList/MainListRow";
import ProductPic from "./ProductPic";
import StarRatingComponent from 'react-star-rating-component';
import Reviews from "./Reviews";
import Typography from "@material-ui/core/Typography";

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
];

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
        marginTop:'30px',
        height: '100%',
        width: '50%',
        border:'0px solid orange',
    },
    customerReview: {
        height: '50%',
        width: '90%',
        marginLeft:'2%',
        marginRight:'4%',
        border:'0px solid green',
    },
    relativeProducts: {
        display:'flex',
        height: '50%',
        maxWidth: '90%',
        border:'0px solid yellow',
        marginBottom:'5%',
        marginLeft:'2%',
        marginRight:'2%',
    },
    productInfo: {
        height: '30%',
        width: '100%',
        border:'0px solid Gray',
    },
    extras: {
        marginTop:'5%',
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
        textDecoration:'bold',
        textAlign:'center',
        color:'rgba(0,11,206,0.3)',
    },
    headings:{
        textAlign:'center',
        color:'rgba(0,11,206,0.3)',
    },
    productDescription:{
        height: '50%',
        width: '80%',
        border:'0px solid blue',
        textAlign:'center',
    },
    details:{
        marginLeft:'0%',
        marginRight:'0%',
    },
    rating:{
        display:'none',
        border:'0px solid black',
        justifyContent:'center',
        width:'100%',
    },
    mainPage:{
        display:'block',
        marginLeft:'15%',
        marginRight: '15%',
        marginBottom:'3%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0 3px 5px 8px rgba(128, 128, 128, .3)',
    },
    notReleased:{
        marginLeft:'10%',
        color:'red',
    }
}));
const tutorialSteps = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
        label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
        imgPath:
            'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

function ProductPage(props){
    const {match} = props
    const [thisProduct,setThisProduct]=React.useState({product: null})
    const classes = useStyles();
    const dataFetch = async () => {
        const product = await fetch('http://127.0.0.1:8000/api/products/' + match.params.pid + '/', {
            method: 'Get',
            withCredentials: true,
            cache: 'default',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res=>res.json())
            .then(json=>setThisProduct({product:json}))
        const resp = product;
        return resp
    }
    useEffect(()=>{
        const ans = dataFetch()
    },[])
    return (
        <div className={classes.mainPage}>
            <h1 className={classes.productName}>{(thisProduct.product) ? thisProduct.product.title : 'Product not Found'}</h1>
            <div>
                <Grid container direction="column" alignItems="center" justify="center" className={classes.parentContainer} spacing='2'>
                    <Grid key='productInfo' item className={classes.productInfo}>
                        <Grid container direction="row" alignItems="center" justify="center" spacing='2'>
                            <Grid key='productPic' item className={classes.productPic}>
                                <Grid container direction="column" alignItems="center" justify="center" spacing='2'>
                                    <Grid item key='picture' style={{display: 'block'}}>
                                        <ProductPic className={classes.image} object={(thisProduct.product) ? thisProduct.product.images : null} />
                                    </Grid>
                                    <Grid item key='rating' className={classes.rating}>
                                        <StarRatingComponent name='productRating' starCount={5} value={3} editing={false} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid key='priceTable' item className={classes.priceTable} >
                                {
                                    ( thisProduct.product && thisProduct.product.children) ?
                                    <MainPricingTable
                                        object={{
                                            children : thisProduct.product.children
                                        }}
                                    />
                                    :
                                        <div>
                                            <Typography variant='h6' className={classes.notReleased}>
                                                This Product is yet to be released
                                            </Typography>
                                        </div>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid key='extras' item className={classes.extras}>
                        <Grid container direction="column" alignItems="center" justify="center" spacing='2'>
                            {
                                (thisProduct.product && thisProduct.product.description) ?
                                    <Grid key='productDescription' item className={classes.productDescription}>
                                        <h1 className={classes.headings}>Details</h1>
                                        <p className={classes.details}>
                                            {thisProduct.product.description}
                                        </p>
                                    </Grid>
                                    :
                                    <Grid key='productDescription' item className={classes.productDescription}>
                                        <h1 className={classes.headings}>Details</h1>
                                        <p className={classes.details}>
                                            Sorry no details Available
                                        </p>
                                    </Grid>
                            }
                            {
                                false ?
                                <Grid key='customerReview' item className={classes.customerReview}>
                                    <h1 className={classes.headings}> Customer Review </h1>
                                    <Reviews/>
                                </Grid>
                                    :
                                    null
                            }
                            <Grid key='relatedProducts' item className={classes.relativeProducts}>
                                {
                                    (thisProduct.product && thisProduct.product.recommended_products) ?
                                    <MainListRow className={classes.productList} object={{
                                        tileData: ((thisProduct.product && thisProduct.product.recommended_products.length>0) ?  thisProduct.product.recommended_products : null),
                                        listTitle: 'Related Objects',
                                        color: 'rgba(0,11,206,0.3)'
                                    }}/>
                                    :
                                        null
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )

}

export default ProductPage;

