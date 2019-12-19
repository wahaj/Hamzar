import React, {useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Collapse, Grid} from "@material-ui/core";
import image from "../HomePage/ProductList/image.jpeg";
import { ButtonBase } from '@material-ui/core';
import image2 from "../HomePage/ProductList/image2.jpg";
import ResultBar from "./ResultBar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

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
    notFound:{
        width:'100%',
    },
    inputInformation:{
        width:'70%',
    },
    notFoundHeading:{
      width:'100%',
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },


}));

export default function SearchResults(props){
    const classes = useStyles();
    const {match} = props
    const [searchText,setSearchText] = React.useState('t')
    const [search, setSearch] = React.useState({ searchResults : null})
    const dataFetch = async () => {
        const product = await fetch('http://127.0.0.1:8000/api/products/search/' + match.params.sName + '/', {
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
                    (search.searchResults && search.searchResults.length>0) ? <Grid item key='quote' className={classes.price}>
                        <Typography  variant="h6" className={classes.authorText} >
                            <b> Following Results Match Your Search   </b>
                        </Typography>
                    </Grid> :
                        ''
                }
                {
                    (search.searchResults  && search.searchResults.length>0) ? search.searchResults.map(tile=>(
                        <Grid item key={tile.title} className={classes.paper}>
                            <ButtonBase className={classes.contains}>
                                <ResultBar object={{ images : tile.images , title:tile.title , productUrl : tile.url}} />
                            </ButtonBase>
                        </Grid>
                    ))
                        :
                        <Grid item key='2' className={classes.paper}>
                            <Grid container direction='column' justify='center' alignItems='flex-start' className={classes.notFound}>
                                <Grid item key='5' >
                                    <Typography variant='h3'>
                                        No results found for " {match.params.sName} "
                                    </Typography>
                                </Grid>
                                <Grid item key='5' >
                                    <Typography variant='h6' className={classes.notFoundHeading}>
                                        Please help us and write in the box what you need with your contact details
                                    </Typography>
                                </Grid>
                                <Grid item key='3' className={classes.inputInformation}>
                                    <TextField
                                        id="outlined-full-width"
                                        label=""
                                        style={{ margin: 8 }}
                                        placeholder="Text"
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item key='4' >
                                    <Button variant="contained" color="primary" className={classes.button}>
                                        Submit
                                        <Icon className={classes.rightIcon}>submit</Icon>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                }
            </Grid>
        </div>
    )
}
