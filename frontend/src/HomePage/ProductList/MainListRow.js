import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/Visibility';
import Grid from "@material-ui/core/Grid";
import History from '../../History/history';
import Alert from '@material-ui/lab/Alert';
import { ButtonBase } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0 3px 5px 8px rgba(128, 128, 128, .3)',
    },
    spinner : {
      marginTop : '2%',
      marginBottom : '2%',
    },
    gridList: {
        flexWrap: 'nowrap',
        width : '100%',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        overflow : 'auto',

    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    image:{
        width : '100%',
        height : '100%',
    },
    gridTile:{
        maxWidth:'80%',
        height:'100%',
        display:'flex',
        overflow:'hidden',
    },
    gridTile2:{
        maxWidth : "20%",
        minWidth : "15%",
        height : '100%',
        display:'flex',
        overflow:'hidden',
        [theme.breakpoints.up('xs')]: {
            maxWidth : "50%",
            minWidth : "40%",
        },
        [theme.breakpoints.up('md')]: {
            maxWidth : "30%",
            minWidth : "20%",
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth : "20%",
            minWidth : "15%",
        },
    }
}));



export default function MainListRow(props) {
    const classes = useStyles();

    return (

        <div className={classes.root}>
          <Grid container direction="column" alignItems="center" justify="center" spacing='2'>
              <Grid item key='heading' style={{display: 'block'}}>
                <h1 style={{color: props.object.color, display: 'block'}}>{props.object.listTitle}</h1>
              </Grid>
              {
                props.object.fetching ?
                  <div className={classes.spinner}>
                    <CircularProgress/>
                  </div>
                :
                  props.object.error ?
                    <Alert severity="info">No products available under this category</Alert>
                  :

                        <Grid item key='arrayOfObjects' style={{display: 'block', marginBottom:'1%'}}>
                            <GridList spacing={20} className={classes.gridList} cols={null}  justify='space-evenly'>
                                {
                                    props.object.tileData ?
                                        props.object.tileData.map(tile => (
                                            <ButtonBase className={classes.gridTile2} href={'../ProductPage/' + tile.id }>
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
                            </GridList>
                        </Grid>
              }

          </Grid>
        </div>
    );
}
