import React from 'react';

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
        fetch('http://192.168.18.10:8000/api/auth/login', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({"email":this.state.email,"password": this.state.password})
        })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem('token', json.token);
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

