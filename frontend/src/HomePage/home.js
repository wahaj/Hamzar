import React from "react";
import Carousel from "./Carousel/mycarousel"
import ProductList from "./ProductList/MainList"
class Home extends React.Component{

    render(){
        return(
            <div>
                <Carousel/>
                <ProductList/>
            </div>
        )
    }
}

export default Home
