import React from "react";
//import {NavLink,BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';

class Login extends React.Component{
	login(){
        this.props.history.push('/index')
		
	}
	render(){
		return(
			<div>
				<header>登录3333</header>
				
                <button onClick={this.login.bind(this)}>登陆</button>
						
				
			</div>
		)
	}
}
export default Login;