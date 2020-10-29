import React from 'react'
import {Container, makeStyles} from "@material-ui/core";
import NavigationIcon from '@material-ui/icons/Navigation'
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
    containerVisible: {
        display: 'flex',
        alignContent:'flex-start',
        visibility:'visible',
    },
    containerInvisible:{
        visibility:'collapse',
    },
    fab: {
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    }
}));


export default function Testing(){
    const classes = useStyles()
    return(
        <div>
            <Container className={classes.containerVisible}>
                <Fab variant="extended" aria-label="Delete" className={classes.fab}>
                    <NavigationIcon className={classes.extendedIcon} />
                    Extended
                </Fab>
            </Container>
        </div>
    )
}