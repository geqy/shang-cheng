import React from "react";
import $ from 'jquery'
//import {NavLink,BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import "../css/List.css"
import aa from "../img/list-a.jpg"
class Login extends React.Component{
	fanhui(){
		this.props.history.go(-1)
	}

	render(){
		return(
			<div>
				<header>				
                    <span className="iconfont span-a" onClick={this.fanhui.bind(this)}>&#xe646;</span>
                    <span className="span-b">注册</span>
				</header>
				<section>
					<div className='sec sec1'>
						<div className='tu-j'>
							<div>
								<img src={aa} />
							</div>
							<p>负离子移动电源</p>
							<p>¥233</p>
						</div>
						<div className='tu-j'>
							<div>
								<img src={aa} />
							</div>
							<p>负离子移动电源</p>
							<p>¥233</p>
						</div>
					</div>
					<div className='sec'>
						<div className='tu-j'>
							<div>
								<img src={aa} />
							</div>
							<p>负离子移动电源</p>
							<p>¥233</p>
						</div>
						<div className='tu-j'>
							<div>
								<img src={aa} />
							</div>
							<p>负离子移动电源</p>
							<p>¥233</p>
						</div>
					</div>
					<div className='sec'>
						<div className='tu-j'>
							<div>
								<img src={aa} />
							</div>
							<p>负离子移动电源</p>
							<p>¥233</p>
						</div>
						<div className='tu-j'>
							<div>
								<img src={aa} />
							</div>
							<p>负离子移动电源</p>
							<p>¥233</p>
						</div>
					</div>
					<div className='sec'>
						<div className='tu-j'>
							<div>
								<img src={aa} />
							</div>
							<p>负离子移动电源</p>
							<p>¥233</p>
						</div>
						<div className='tu-j'>
							<div>
								<img src={aa} />
							</div>
							<p>负离子移动电源</p>
							<p>¥233</p>
						</div>
					</div>
				</section>
               
						
				
			</div>
		)
	}
}
export default Login;