import React from 'react';
import aa from "../img/tou.png"
import bb from "../img/xie.png"
import '../css/Fenlei.css';
import { NavLink, BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

class Fenlei extends React.Component {
	render() {
		return(
			<div className="title">
                <header className='heard-a'>
					<span className="iconfont">&#xe606;</span>
                	<input type='text' placeholder="搜索你想要的商品"  />
                </header>
                <Router>
                    <div  className="title-a">
                       	<div className="biao-a">
                       		<span><img src={aa} className="aa" alt="aa" /></span>
                       		<span>衣裤</span>
                       	</div>
                       
                       	<div className="biao-b">
                       		<span><img src={bb} className="bb" alt="bb" /></span>
                       		<span>
                       			<p>鞋靴</p>
                       			<p>千里之外,始于脚下</p>
                       		</span>
                       		<span>
                       			>
                       		</span>
                       	</div>
                       	<div className="biao-b">
                       		<span><img src={bb} className="bb" alt="bb" /></span>
                       		<span>
                       			<p>鞋靴</p>
                       			<p>千里之外,始于脚下</p>
                       		</span>
                       		<span>
                       			>
                       		</span>
                       	</div> 
                       	<div className="biao-a">
                       		<span><img src={aa} className="aa" alt="aa" /></span>
                       		<span>衣裤</span>
                       	</div>
                       
                       	<div className="biao-b">
                       		<span><img src={bb} className="bb" alt="bb" /></span>
                       		<span>
                       			<p>鞋靴</p>
                       			<p>千里之外,始于脚下</p>
                       		</span>
                       		<span>
                       			>
                       		</span>
                       	</div>
                       	<div className="biao-b">
                       		<span><img src={bb} className="bb" alt="bb" /></span>
                       		<span>
                       			<p>鞋靴</p>
                       			<p>千里之外,始于脚下</p>
                       		</span>
                       		<span>
                       			>
                       		</span>
                       	</div> 
                       	<div className="biao-a">
                       		<span><img src={aa} className="aa" alt="aa" /></span>
                       		<span>衣裤</span>
                       	</div>
                       
                       	<div className="biao-b">
                       		<span><img src={bb} className="bb" alt="bb" /></span>
                       		<span>
                       			<p>鞋靴</p>
                       			<p>千里之外,始于脚下</p>
                       		</span>
                       		<span>
                       			>
                       		</span>
                       	</div>
                       	<div className="biao-b">
                       		<span><img src={bb} className="bb" alt="bb" /></span>
                       		<span>
                       			<p>鞋靴</p>
                       			<p>千里之外,始于脚下</p>
                       		</span>
                       		<span>
                       			>
                       		</span>
                       	</div> 
                    </div>
                    
                </Router>
            </div>
		)
	}
}

export default Fenlei;