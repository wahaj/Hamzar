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
    const [newArrivals, setNewArrivals]=React.useState({tileData : tileDataArray , fetching : true , error : false});
    const [comics,setComics] = React.useState({tileData : [] , fetching : true , error : false});
    const [magzines,setMagzines] = React.useState({tileData : [] , fetching : true , error : false});
    const [history,setHistory] = React.useState({tileData : [] , fetching : true , error : false});
    const [education,setEducation] = React.useState({tileData : [] , fetching : true , error : false});
    const [exams,setExams] = React.useState({tileData : [] , fetching : true , error : false});
    const [fiction,setFiction] = React.useState({tileData : [] , fetching : true , error : false});
    const [fetching, setFetching] = React.useState({inProgress : true});
    const [error,setError]=React.useState({status : false});
    useEffect(()=>{
        setError({status : false});
        setNewArrivals({fetching : true, error : false})
        fetch('https://hamzar.com/api/v1/products/new_arrivals/', {
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
                setNewArrivals({tileData : json, fetching : false})
            })
            .catch(()=>{
              setError({status : true})
              setNewArrivals({error : true, fetching : false})
            })

        setFiction({fetching : true , error : false})
        fetch('https://hamzar.com/api/v1/products/category/fiction', {
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
                setFiction({tileData : json,fetching : false})
            })
            .catch(()=>{
              setError({status : true})
              setNewArrivals({fetching : false, error : true})
            })
        setComics({error : false, fetching : true})
        fetch('https://hamzar.com/api/v1/products/category/comics-and-graphics-novels/', {
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
                setComics({tileData : json, fetching : false})
            }).catch(()=>{
              setError({status : true})
              setComics({error : true, fetching : false})
            })
        setMagzines({error : false, fetching : true})
        fetch('https://hamzar.com/api/v1/products/category/magazines/', {
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
                setMagzines({tileData : json, fetching : false})
            }).catch(()=>{
              setError({status : true})
              setMagzines({error : true, fetching : false})
            })
        setEducation({error : false, fetching : true})
        fetch('https://hamzar.com/api/v1/products/category/educational-teaching/', {
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
                setEducation({tileData : json, fetching : false})
            }).catch(()=>{
              setError({status : true})
              setEducation({error : true, fetching : false})
            })
        setExams({error : false, fetching : true})
        fetch('https://hamzar.com/api/v1/products/category/test-preparation/', {
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
                setExams({tileData : json , fetching : false})
            }).catch(()=>{
              setError({status : true})
              setExams({error : true, fetching : false})
            })
        setHistory({error : false, fetching : true})
        fetch('https://hamzar.com/api/v1/products/category/history_2/', {
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
                setHistory({tileData : json, fetching : false})
            }).catch(()=>{
              setError({status : true})
              setHistory({error : true, fetching : false})
            })
        console.log(fetching.inProgress);
        console.log(error.status);

    },[])
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xxl" minWidth="xs" className={classes.mainBack}>
                <br/><br/><br/>
                <div>
                <MainListRow object={{tileData : fiction.tileData, error : fiction.error , fetching : fiction.fetching , listTitle:'Fiction', color:'black'}} />
                </div>
                <br/><br/><br/>
                <div>
                    <MainListRow object={{tileData : education.tileData, error : education.error , fetching : education.fetching , listTitle:'Educational & Teaching', color:'black'}} />
                </div>
                <br/><br/><br/>
                <div>
                    <MainListRow object={{tileData : magzines.tileData, error : magzines.error , fetching : magzines.fetching , listTitle:'Magazines', color:'black'}} />
                </div>
                <br/><br/><br/>
                <div>
                    <MainListRow object={{tileData : comics.tileData,  error : comics.error , fetching : comics.fetching , listTitle:'Comic and Graphic Novels', color:'black'}} />
                </div>
                <br/><br/><br/>
                <div>
                    <MainListRow object={{tileData : history.tileData, error : history.error , fetching : history.fetching , listTitle:'History', color:'black'}} />
                </div>
                <br/><br/><br/>
                <div>
                    <MainListRow object={{tileData : newArrivals.tileData, error : newArrivals.error , fetching : newArrivals.fetching , listTitle:'New Arrivals', color:'black'}} />
                </div>
                <br/><br/><br/>
            </Container>
        </React.Fragment>
    );
}
