import React from "react";
import MyNavbar from "./Navbar/mynavbar";
import MenuBar from "./Menubar/menubar";
import Carousel from "./Carousel/mycarousel"
import Footer from "./Footer/BottomBar"
import ProductList from "./ProductList/MainList"
class Home extends React.Component{

    render(){
        return(
            <div>
                <MyNavbar cartSize="8"/>
                <MenuBar/>
                <Carousel/>
                <ProductList/>
                <Footer/>
            </div>
        )
    }
}

export default Home