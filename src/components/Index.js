import React from "react";
import { NavLink, BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from "./Home";
import Fenlei from "./Fenlei";
import Cart from "./Cart";
import My from "./My";
import Regist from "./Regist";

class Index extends React.Component {
	render() {
		return(
			<div>
				<Router>
				  <div className='index'>
					<Switch>
<<<<<<< HEAD
						<Route path="/home" component={Home}></Route>
						<Route path="/fenlei" component={Fenlei}></Route>
						<Route path="/cart" component={Cart}></Route>
						<Route path="/my" component={My}></Route>
						<Route path="/regist" component={Regist}></Route>
                      <Redirect to="/my"/>
=======
						<Route path="/index/home" component={Home}></Route>
						<Route path="/index/fenlei" component={Fenlei}></Route>
						<Route path="/index/cart" component={Cart}></Route>
						<Route path="/index/my" component={My}></Route>
                           
                        <Redirect to="/index/home"/>						
>>>>>>> 0b13b00e087dbe19b75176c7afe113315319669f
					</Switch>
					
					<footer>
						<NavLink to="/index/home">
							<i className="iconfont">&#xe619;</i>
							<p>首页</p>
						</NavLink>
						<NavLink to="/index/fenlei">
							<i className="iconfont">&#xe603;</i>
							<p>分类</p>
						</NavLink>
						<NavLink to="/index/cart">
							<i className="iconfont">&#xe726;</i>
							<p>购物车</p>
						</NavLink>
						<NavLink to="/index/my">
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