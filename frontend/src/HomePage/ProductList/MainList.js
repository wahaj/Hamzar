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
            <Container maxWidth="xl" minWidth="xs" className={classes.mainBack}>
                <br/><br/><br/>
                <div>
                <MainListRow object={{tileData : bestSellers.tileData, listTitle:'Best Sellers', color:'rgba(0,11,206,0.3)'}} />
                </div>
                <br/><br/><br/>
                <div>
                    <MainListRow object={{tileData : newArrivals.tileData, listTitle:'New Arrivals', color:'rgba(0,11,206,0.3)'}} />
                </div>
                <br/><br/><br/>
            </Container>
        </React.Fragment>
    );
}
