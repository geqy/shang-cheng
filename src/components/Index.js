import React from "react";
import { NavLink, BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from "./Home";
import Fenlei from "./Fenlei";
import Cart from "./Cart";
import My from "./My";

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
							<i className="iconfont">&#xe619;</i>
							<p>首页</p>
						</NavLink>
						<NavLink to="/fenlei">
							<i className="iconfont">&#xe603;</i>
							<p>分类</p>
						</NavLink>
						<NavLink to="/cart">
							<i className="iconfont">&#xe726;</i>
							<p>购物车</p>
						</NavLink>
						<NavLink to="/my">
							<i className="iconfont">&#xe600;</i>
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