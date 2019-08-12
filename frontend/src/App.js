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
import SignupPage from "./SignupPage/SignupPage";
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
import OrderStatus from "./TrackOrderPage/orderStatus"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            loggedIn: false,
            firstName: null,
            lastName: null,
            id: null,
            email: null,
            phoneNumber: null
        }
    }

    componentDidMount() {
        if (this.state.loggedIn) {
        fetch('http://192.168.18.10:8000/api/auth/verify_token', {
            headers: {
                'Content-Type' : 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({token : localStorage.getItem('token')})
        })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem('token', json.token);
            });
        }
    };

    handleSetState(data) {
        this.setState({
            id: data.user.id,
            laggedIn: true,
            firstName: data.user.firstName,
            lastName: data.user.lastName,
            email: data.user.email,
            phoneNumber: data.user.phone_number
        })
    }

    render() {
        return (
            <Router history={History}>
                <Navbar cartSize="1"/>
                <MenuBar/>

                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/profile' component={ProfilePage}/>
                    <Route path='/logIn' component={LoginPage}/>
                    <Route path='/signUp' component={SignupPage}/>
                    <Route path='/faqs' component={FAQPage}/>
                    <Route path='/career' component={Career}/>
                    <Route path='/aboutUs' component={AboutUsPage}/>
                    <Route path='/questionQuery' component={QuestionQuery}/>
                    <Route path='/changePass' component={ChangePass}/>
                    <Route path='/productPage' component={ProductPage}/>
                    <Route path='/test' component={Test}/>
                    <Route path='/SearchResults' component={SearchResults}/>
                    <Route exact path='/track-order' component={TrackOrder} />
                    <Route path='/track-order/:id' component={OrderStatus} />
                    <Route component={Error404}/>
                </Switch>

                <Footer/>
            </Router>
        );
    }
}

export default App