import React from 'react';

class SignupPage extends React.Component {
    state = {
        email: '',
        password: '',
        phone_number:'',
        address:''
    };

    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState[name] = value;
            return newState;
        });
    };
    handle_signup = (e) => {
        e.preventDefault();
        fetch('http://192.168.18.10:8000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem('token', json.token);
            });
    };

    render() {
        return (
            <form onSubmit={e => this.handle_signup(e)}>
                <h4>Sign Up</h4>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handle_change}
                />
                <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handle_change}
                />
                <input
                    type="text"
                    name="address"
                    value={this.state.address}
                    onChange={this.handle_change}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="number"
                    name="phone_number"
                    value={this.state.phone_number}
                    onChange={this.handle_change}
                />
                <input type="submit" />
            </form>
        );
    }
}

export default SignupPage;
