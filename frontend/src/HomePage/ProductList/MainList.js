import React, {useEffect, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import image from './image.jpeg';
import image2 from './image2.jpg';
import MainListRow from "./MainListRow";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    mainBack: {
        margin : '0',
        width: '100%',
        backgroundColor: 'rgba(204,204,204,.3)',
        paddingLeft:'2%',
        paddingRight:'2%',
        border:'0px solid blue',
    },}));

 const tileDataArray = [

 ];

export default function MainList() {
    const classes = useStyles();
    const [bestSellers, setBestSellers]=React.useState({tileData : tileDataArray});
    const [newArrivals, setNewArrivals]=React.useState({tileData : tileDataArray});
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/products/new_arrivals/', {
            method: 'Get',
            withCredentials:true,
            cache:'default',
            credentials:'include',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(json => {
                setNewArrivals({tileData : json})
            });
        fetch('http://127.0.0.1:8000/api/products/best_sellers/', {
            method: 'Get',
            withCredentials:true,
            cache:'default',
            credentials:'include',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(json => {
                setBestSellers({tileData : json})
            });
    },[])
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xxl" minWidth="xs" className={classes.mainBack}>
                <br/><br/><br/>
                <div>
                <MainListRow object={{tileData : bestSellers.tileData, listTitle:'Comics and Graphics Novels', color:'black'}} />
                </div>
                <br/><br/><br/>
                <div>
                    <MainListRow object={{tileData : newArrivals.tileData, listTitle:'Educational & Teaching', color:'black'}} />
                </div>
                <br/><br/><br/>
                <div>
                    <MainListRow object={{tileData : newArrivals.tileData, listTitle:'Magazines', color:'black'}} />
                </div>
                <br/><br/><br/>
                <div>
                    <MainListRow object={{tileData : newArrivals.tileData, listTitle:'Literature & Fashion', color:'black'}} />
                </div>
                <br/><br/><br/>
                <div>
                    <MainListRow object={{tileData : newArrivals.tileData, listTitle:'Romance', color:'black'}} />
                </div>
                <br/><br/><br/>
                <div>
                    <MainListRow object={{tileData : newArrivals.tileData, listTitle:'Best Sellers', color:'black'}} />
                </div>
                <br/><br/><br/>
            </Container>
        </React.Fragment>
    );
}
