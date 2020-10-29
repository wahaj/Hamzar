import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Advertisement from './Advertisement';
import image from './image.jpeg';
import image2 from './image2.jpg';
import MainListRow from "./MainListRow";
import BottomBar from "./BottomBar";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    mainBack: {
        backgroundColor: 'rgba(204,204,204,.3)',
    },}));

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

export default function MainList() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" className={classes.mainBack}>
                <Advertisement/>
                <br/><br/><br/>
                <div>
                <MainListRow object={{tileData : tileDataArray, listTitle:'Best Sellers'}} />
                </div>
                <br/><br/><br/>
                <div>
                    <MainListRow object={{tileData : tileDataArray, listTitle:'Discount Offers'}} />
                </div>
                <br/><br/><br/>
                <div>
                    <BottomBar />
                </div>
            </Container>
        </React.Fragment>
    );
}
