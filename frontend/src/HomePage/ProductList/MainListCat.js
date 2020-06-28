import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/Visibility';
import Grid from "@material-ui/core/Grid";
import History from '../../History/history';
import { ButtonBase } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0 3px 5px 8px rgba(128, 128, 128, .3)',
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',

    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    gridTile:{
        width:'300px'
    },
    image:{
        width : '100%',
        height : '100%',
    },
    gridTile:{
        width:'100%',
        height:'100%',
        display:'flex',
        overflow:'hidden',
    }
}));


export default function MainListCat(props) {
    const classes = useStyles();
    const [rend, setRend] = React.useState({value:null})
    var templist = []
    const [thisState, setThisState] = React.useState({list:null})
    function changeState(){
        if (!thisState.list && templist.length>0 ){
            console.log(templist)
            setThisState({
                list : templist
            })
        }
    }
    function tryReRender(){
        if (!rend.value){
            setRend({
                value:true
            })
        }
    }
    const dataFetch = async () => {
        let product = null
         if (props.object.tileData){
               await props.object.tileData.map(tile=>(
                    product =fetch(tile, {
                        method: 'Get',
                        withCredentials: true,
                        cache: 'default',
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    }).then(res=>res.json())
                    .then(json=>{
                            templist.push(json)
                    }
                    )
         )
                )
             setThisState({
                 list: templist,
             })
         }

    }
    useEffect(()=>{
        const ans = dataFetch()
    },[rend])
    return (

        <div className={classes.root}>
            <Grid container direction="column" alignItems="center" justify="center" spacing='2'>
                <Grid item key='heading' style={{display: 'block'}}>
                    {
                        props.object.tileData ?
                            <h1 style={{color: props.object.color, display: 'block'}}>{props.object.listTitle}</h1>
                            :
                            null
                    }
                </Grid>
                <Grid item key='arrayOfObjects' style={{display: 'block', marginBottom:'1%'}}>
                    <GridList spacing={20} cellHeight={300} className={classes.gridList} cols={null}  justify='space-evenly'>
                        {
                            thisState.list  ?
                                thisState.list.map(tile => (
                                    <ButtonBase className={classes.gridTile2} href={'./ProductPage/' + tile.id }>
                                        <GridListTile key={tile.id} className={classes.gridTile}>
                                            <img className={classes.image} src={(tile && tile.images && tile.images.length > 0) ? tile.images[0].original: 'https://hamzar.com/media/image_not_found.jpg' } alt={tile.title} />
                                            <GridListTileBar
                                                title={tile.title}
                                                classes={{
                                                    root: classes.titleBar,
                                                    title: classes.title,
                                                }}
                                            />
                                        </GridListTile>
                                    </ButtonBase>
                                ))
                                :
                                null
                        }
                        {
                            thisState.list ?
                                console.log(thisState.list)
                                :
                                console.log(thisState.list)}

                    </GridList>
                </Grid>
            </Grid>
        </div>
    );
}
