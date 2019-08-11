import React from 'react';

class LoginPage extends React.Component {
    constructor( props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            logStatus: props.logStateProp
        };
        this.logMutator=this.logMutator.bind(this)
    }

    logMutator(){
        this.props.mutateLogState();
    }

    handle_login () {
        this.logMutator();
        console.log('a');
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
            <form onSubmit={this.handle_login}>
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

