import React, { useState, useEffect } from 'react';
import Home from "./HomePage/home";
import ProfilePage from "./ProfilePage/profilePage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Router} from "react-router-dom";
import './App.css';
import Navbar from "./Navbars/Navbar/mynavbar";
import MenuBar from "./Navbars/Menubar/menubar";
import Footer from "./Navbars/Footer/BottomBar"
import TrackOrder from "./TrackOrderPage/TrackOrder"
import LoginPage from "./LoginPage/loginForm";
import SignUpPage from "./SignupPage/SignupPage";
import FAQPage from "./InformationPages/FAQPage/FAQPage.js";
import Career from "./InformationPages/CareerPage/Career";
import AboutUsPage from "./InformationPages/AboutUsPage/AboutUsPage";
import QuestionQuery from "./InformationPages/QuestionQuery";
import ChangePass from "./InformationPages/ChangePass";
import ProductPage from "./ProductPage/ProductPage";
import Test from "./Test";
import SearchResults from "./SearchResults/SearchResults";
import Error404 from './ErrorPages/Error404.js'
import History from './History/history'
import Store from './History/Store'
import OrderStatus from "./TrackOrderPage/orderStatus"
import Cart from "./CartPage/cartPage"
import RetAndRef from "./InformationPages/RetAndRef/RetAndRef";
import DeliverySystem from "./InformationPages/DeliverySystem/DeliverySystem";
import Privacy from "./InformationPages/Privacy/Privacy";
import TermsAndCondition from "./InformationPages/TermsAndCondition/TermsAndCondition";
import Payment from "./InformationPages/Payment/Payment";
import ContactUs from "./InformationPages/ContactUs/ContactUs";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            ls: Store.getLogStatus()
        }
        this.changeState = this.changeState.bind(this)
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.ls != Store.getLogStatus())
        {
            this.setState({ls: Store.getLogStatus()})
        }
    }

    changeState(){
        this.setState({ls: Store.getLogStatus()})
    }

    render() {
        return (
            <Router history={History}>
                <Navbar />
                <MenuBar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/profile' component={ProfilePage}/>
                    <Route path='/log-in' render={(props) => <LoginPage {...props} uls={this.changeState}/>}/>
                    <Route path='/sign-up' component={SignUpPage}/>
                    <Route path='/faqs' component={FAQPage}/>
                    <Route path='/career' component={Career}/>
                    <Route path='/about-us' component={AboutUsPage}/>
                    <Route path='/ret-and-ref' component={RetAndRef}/>
                    <Route path='/question-query' component={QuestionQuery}/>
                    <Route path='/change-pass' component={ChangePass}/>
                    <Route exact path='/track-order' component={TrackOrder} />
                    <Route path='/track-order/:ids' component={OrderStatus} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/productPage/:pid' component={ProductPage}/>
                    <Route path='/test' component={Test}/>
                    <Route path='/SearchResults/:sName' component={SearchResults}/>
                    <Route path='/DeliverySystem' component={DeliverySystem}/>
                    <Route path='/Privacy' component={Privacy}/>
                    <Route path='/TermsAndCondition' component={TermsAndCondition}/>
                    <Route path='/Payment' component={Payment}/>
                    <Route path='/ContactUs' component={ContactUs}/>
                    <Route component={Error404}/>
                </Switch>
                <Footer/>
            </Router>
        );
    }
}

export default App