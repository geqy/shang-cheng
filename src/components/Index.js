import React from "react";
import { NavLink, BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from "./Home";
import Fenlei from "./Fenlei";
import Cart from "./Cart";
import My from "./My";

import 'antd-mobile/dist/antd-mobile.css';

class Index extends React.Component {
	render() {
		return(
			<div>
				<Router>
				  <div className='index'>
					<Switch>
						<Route path="/home" component={Home}></Route>
						<Route path="/fenlei" component={Fenlei}></Route>
						<Route path="/cart" component={Cart}></Route>
						<Route path="/my" component={My}></Route>
                        <Redirect to="/home"/>
					</Switch>
					
					<footer>
						<NavLink to="/home">
							<i>1</i>
							<p>首页</p>
						</NavLink>
						<NavLink to="/fenlei">
							<i>2</i>
							<p>分类</p>
						</NavLink>
						<NavLink to="/cart">
							<i>3</i>
							<p>购物车</p>
						</NavLink>
						<NavLink to="/my">
							<i>4</i>
							<p>我的</p>
						</NavLink>
						
					</footer>
					
				  </div>
					
				</Router>
				
			</div>
		)
	}
}
export default Index;
//Switch内渲染的是home页面，只看这个页面就行