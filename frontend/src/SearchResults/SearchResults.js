import React, {useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Collapse, Grid} from "@material-ui/core";
import image from "../HomePage/ProductList/image.jpeg";
import { ButtonBase } from '@material-ui/core';
import image2 from "../HomePage/ProductList/image2.jpg";
import ResultBar from "./ResultBar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    mainElement:{
        display:'block',
        margin:'3% 15% 3% 10%',
        width:'80%',
        backgroundColor: theme.palette.background.paper,
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
    singleProduct:{
        width:'100%',
        border:'0px solid green',
        marginLeft:'2%',
    },
    paper: {
        width: '100%',
        border:'0px solid blue',
    },
    authorText:{

    },
    price:{
    },
    contains:{
        width:'100%',
        height:'100%',
    },


}));

export default function SearchResults(props){
    const classes = useStyles();
    const {match} = props
    const [search, setSearch] = React.useState({ searchResults : null})
    const dataFetch = async () => {
        const product = await fetch('http://127.0.0.1:8000/api/products/search/the/', {
            method: 'Get',
            withCredentials: true,
            cache: 'default',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(json =>setSearch({searchResults: json}));
        const resp = product;
        return resp
    }
    useEffect(()=>{
        const ans = dataFetch()
    },[])
    console.log(search.searchResults)
    return(
        <div className={classes.mainElement}>
            <Grid container
                  className={classes.singleProduct}
                  direction='column'
                  justify='center'
                  alignItems='strech'
                  spacing='3'
            >
                {
                    (search.searchResults) ? <Grid item key='quote' className={classes.price}>
                        <Typography  variant="h6" className={classes.authorText} >
                            <b> Following Results Match Your Search   </b>
                        </Typography>
                    </Grid> :
                        ''
                }
                {
                    (search.searchResults) ? search.searchResults.map(tile=>(
                        <Grid item key={tile.title} className={classes.paper}>
                            <ButtonBase className={classes.contains}>
                                <ResultBar object={{ images : tile.images , title:tile.title}} />
                            </ButtonBase>
                        </Grid>
                    ))
                        : 'No Item Matches your search'
                }
            </Grid>
        </div>
    )
}
