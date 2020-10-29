import React, {useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import image from "./HomePage/ProductList/image.jpeg";
import GridListTile from '@material-ui/core/GridListTile';
import image2 from "./HomePage/ProductList/image2.jpg";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/core/SvgIcon/SvgIcon";
import GridList from "@material-ui/core/GridList";
const useStyles = makeStyles(theme => ({
    mainElement:{
        display:'block',
        border:'1px solid black',
        overflow:'hidden',
        paddingBottom:'2%',
        paddingTop:'2%',
        width:'80%%'
    },

}));
const tileDataArray = [
    {
        product_image: image,
        title: 'Image',
        author: 'author',
    },
    {
        product_image: image2,
        title: 'Image2',
        author: 'author2',
    },
    {
        product_image: image,
        title: 'Image',
        author: 'author',
    },
    {
        product_image: image2,
        title: 'Image2',
        author: 'author2',
    },
    {
        product_image: image,
        title: 'Image',
        author: 'author',
    },
    {
        product_image: image,
        title: 'Image',
        author: 'author',
    },
    {
        product_image: image,
        title: 'Image',
        author: 'author',
    },
    {
        product_image: image,
        title: 'Image',
        author: 'author',
    },
    {
        product_image: image,
        title: 'Image',
        author: 'author',
    },
    {
        product_image: image,
        title: 'Image',
        author: 'author',
    },
    {
        product_image: image,
        title: 'Image',
        author: 'author',
    },
]


class Test extends React.Component{
    constructor(){
        super();
        this.state={
            ran: null,
        }
    }
    componentWillMount(){
        fetch(`${process.env.REACT_APP_API_ULR}/products/best_sellers`, {
                method: 'Get',
            })
                .then(res => res.json())
                .then(json => {
                    this.setState(
                        {
                            ran:json.results,
                        }
                    )
                });

    }
    render() {
        return (
            <div>
                <GridList spacing={20} cellHeight={300}  cols={null}>
                    {
                        this.state.ran ?
                        this.state.ran.map(tile => (
                        <GridListTile key={tile.product_image} >
                            <img src={tile.product_image} alt={tile.title}/>
                            <GridListTileBar
                                title={tile.title}
                                actionIcon={
                                    <IconButton aria-label={`star ${tile.title}`}>
                                        <StarBorderIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))
                            : null
                    }
                </GridList>
            </div>
        )
    }
}
export default Test;
