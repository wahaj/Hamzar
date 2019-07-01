import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonBases from './hoverButton'

const useStyles = makeStyles({
    card: {
        maxWidth: 300,
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/logo.svg"
                    title="Logo"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Product 1
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Spiderman is shit and this and that shit this shit
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions >
                <ButtonBases size="small" color="primary">
                    Quick View
                </ButtonBases>
            </CardActions>
        </Card>
    );
}
