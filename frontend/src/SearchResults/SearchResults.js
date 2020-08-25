import React, {useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Collapse, Grid} from "@material-ui/core";
import image from "../HomePage/ProductList/image.jpeg";
import { ButtonBase } from '@material-ui/core';
import image2 from "../HomePage/ProductList/image2.jpg";
import ResultBar from "./ResultBar";
import Typography from "@material-ui/core/Typography";
import CircularProgress from '@material-ui/core/CircularProgress'
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
    spinner : {
      marginTop : '2%',
      marginBottom : '2%',
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
    const [searchText,setSearchText] = React.useState(match.params.sName)
    const [loading,setLoading] = React.useState(true);
    const [search, setSearch] = React.useState({ searchResults : null})
    const dataFetch = async () => {
        const product = await fetch('https://hamzar.com/api/v1/products/search/' + match.params.sName + '/', {
            method: 'Get',
            withCredentials: true,
            cache: 'default',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
        .catch(res=>setLoading(false))
            .then(json =>{
              setSearch({searchResults: json})
              setLoading(false);
          })
          .catch(res=>setLoading(false))
        const resp = product;
        return resp
    }
    useEffect(()=>{
        setSearchText(match.params.sName)
        const ans = dataFetch()
    },[loading,match.params.sName])
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
                  loading ?
                    <div className={classes.spinner}>
                      <CircularProgress color='black'/>
                    </div>
                  :
                    (search.searchResults  && search.searchResults.length>0) ? search.searchResults.map(tile=>(
                        <Grid item key={tile.title} className={classes.paper}>
                            <ButtonBase className={classes.contains} href={'../ProductPage/' + tile.id }>
                                <ResultBar object={{ images : tile.images , title:tile.title , productUrl : tile.url}} />
                            </ButtonBase>
                        </Grid>
                    ))
                        :
                        <Grid item key='2' className={classes.paper}>
                            <Grid container direction='column' justify='center' alignItems='flex-start' className={classes.notFound}>
                                <Grid item key='5' >
                                    <Typography variant='h3'>
                                        No results found for " {searchText} "
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
