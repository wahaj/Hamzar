import React from 'react';
import Cookie from 'js-cookie';

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }

    handle_login = e => {
        e.preventDefault();
        fetch('http://192.168.100.10:8000/api/login/', {
            headers: {
                'Content-Type': 'application/json',
                Accept:'application/json',
            },
            cache:'default',
            method: 'POST',
            body: JSON.stringify({'username':'wj@gmail.com','password': 'albalushi47'})
        })
            .then(res =>{
                localStorage.setItem('token', res.headers['csrftoken']);
                console.log(document.cookie);
            })
            .catch((err)=>alert(err));

    };

    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevState => {
            const newState = { ...prevState };
            newState[name] = value;
            return newState;
        });
    };

    render() {
        return (
            <form onSubmit={e => this.handle_login(e)}>
                <h4>Log In</h4>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handle_change}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handle_change}
                />
                <input type="submit" />
            </form>
        );
    }
}

export default LoginPage;

