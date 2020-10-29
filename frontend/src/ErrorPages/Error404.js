import React, {useEffect} from 'react';
import ProductPage from '../ProductPage/ProductPage.js';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MaintainSession from '../Session/MaintainSession.js'

const useStyles = makeStyles(theme=>({
    root:{
        width:'1900px',
        height:'800px',
        display:'flex',
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0 3px 5px 8px rgba(128, 128, 128, .3)',
        alignContent:'center',
        justufy:'flex-center',
        margin:'4% 4% 4% 4%',
    },
    button:{
        width:'20px',
        height:'20px',
        color:'blue',
    }
}))



export default function Error404(){
    const classes = useStyles();
    useEffect(
        function(){
            const forParents = '?structure=parent'
            fetch(`${process.env.REACT_APP_API_URL}/products/` + forParents, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept:'application/json',
                },
                cache:'default',
                method: 'GET',
            })
                .then(res =>res.json())
                .then(json=>{
                    console.log(json)
                })
                .catch((err)=>alert(err));
            MaintainSession.setName("problem with backend server ")
            alert(MaintainSession.getName())
        }
        ,[])
    return(
        <div className={classes.root}>
            ERROR PAGE {MaintainSession.getName()}
            <Button variant="contained" className={classes.button}>
                Default
            </Button>
        </div>
    )
}
