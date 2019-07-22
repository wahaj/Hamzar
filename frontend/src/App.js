import React, { useState, useEffect } from 'react';
import Home from "./HomePage/home";
import ProfilePage from "./ProfilePage/profilePage";
import {Router, Route} from "react-router-dom";
import './App.css';
import Navbar from "./Navbars/Navbar/mynavbar";
import MenuBar from "./Navbars/Menubar/menubar";
import Footer from "./Navbars/Footer/BottomBar"
import TrackOrder from "./TrackOrderPage/TrackOrder"
import LoginPage from "./LoginPage/loginForm";
import SignUpPage from "./SignupPage/SignupPage";
import FAQPage from "./InformationPages/FAQPage";
import Career from "./InformationPages/Career";
import AboutUsPage from "./InformationPages/AboutUsPage";
import QuestionQuery from "./InformationPages/QuestionQuery";
import ChangePass from "./InformationPages/ChangePass";
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
                <Route exact path='/' component={Home}/>
                <Route path='/profile' component={ProfilePage}/>
                <Route path='/log-in' component={LoginPage}/>
                <Route path='/sign-up' component={SignUpPage}/>
                <Route path='/faqs' component={FAQPage}/>
                <Route path='/career' component={Career}/>
                <Route path='/about-us' component={AboutUsPage}/>
                <Route path='/question-query' component={QuestionQuery}/>
                <Route path='/change-pass' component={ChangePass}/>
                <Route exact path='/track-order' component={TrackOrder} />
                <Route path='/track-order/:id' component={OrderStatus} />
                <Footer/>
            </Router>
        );
    }
}

export default App