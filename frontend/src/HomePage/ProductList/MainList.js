import React, {useEffect, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import image from './image.jpeg';
import image2 from './image2.jpg';
import MainListRow from "./MainListRow";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    mainBack: {
        backgroundColor: 'rgba(204,204,204,.3)',
    },}));

 const tileDataArray = [
       {
             product_image: image,
             title: 'Image',
             author: 'author',
           },
     {
         product_image: image2,
         title: 'Image2',
         author: 'author2',
     },
     {
         product_image: image,
         title: 'Image',
         author: 'author',
     },
     {
         product_image: image2,
         title: 'Image2',
         author: 'author2',
     },
     {
         product_image: image,
         title: 'Image',
         author: 'author',
     },
     {
         product_image: image,
         title: 'Image',
         author: 'author',
     },
     {
         product_image: image,
         title: 'Image',
         author: 'author',
     },
     {
         product_image: image,
         title: 'Image',
         author: 'author',
     },
     {
         product_image: image,
         title: 'Image',
         author: 'author',
     },
     {
         product_image: image,
         title: 'Image',
         author: 'author',
     },
     {
         product_image: image,
         title: 'Image',
         author: 'author',
     },
           ];

export default function MainList() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" minWidth="xs" className={classes.mainBack}>
                <br/><br/><br/>
                <div>
                <MainListRow object={{tileData : tileDataArray, listTitle:'Best Sellers', color:'rgba(0,11,206,0.3)'}} />
                </div>
                <br/><br/><br/>
                <div>
                    <MainListRow object={{tileData : tileDataArray, listTitle:'Discount Offers', color:'rgba(0,11,206,0.3)'}} />
                </div>
                <br/><br/><br/>
            </Container>
        </React.Fragment>
    );
}
