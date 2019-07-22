import React from 'react';

class ChangePass extends React.Component {
    constructor() {
        super();
        this.state = {
            oldPassword: '',
            newPassword: ''
        };
    }
    handle_changePass = e => {
        e.preventDefault();
        fetch('http://192.168.18.10:8000/api/auth/change_password', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `JWT ${localStorage.getItem('token')}`
            },
            method: 'POST',
            body:JSON.stringify({
                old_password:this.state.oldPassword,
                new_password:this.state.newPassword
            })
        })
            .then(res => res.json())
            .then(json => {
                /*localStorage.setItem('token', json.token);*/
            })
            .catch((err)=>alert('password not updated'));
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
            <form onSubmit={e => this.handle_changePass(e)}>
                <h4>Log In</h4>
                <label htmlFor="password">Old Password</label>
                <input
                    type="password"
                    name="oldPassword"
                    value={this.state.oldPassword}
                    onChange={this.handle_change}
                />
                <label htmlFor="password">New Password</label>
                <input
                    type="password"
                    name="newPassword"
                    value={this.state.newPassword}
                    onChange={this.handle_change}
                />
                <input type="submit" />
            </form>
        );
    }
}

export default ChangePass;

