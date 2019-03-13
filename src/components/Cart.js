import React from 'react';
import '../css/Cart.css';
import {NavLink,BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import aa from "../img/list-a.jpg"
import { List, Stepper } from 'antd-mobile';

class Cart extends React.Component{
	constructor(props){
		super(props)
		this.state={
			checkhave:1,
			selected:true,
			 val: 3,
		}
		
	}
	changeitem(){
		
	}
	 onChange = (val) => {
    // console.log(val);
    this.setState({ val });
  }
	
    render(){
    	
        return(
            <div>
                <header className='head'>购物车</header>
                <Router>
                    <div className='gou'>
                       <div className="wu">
                       		<span className="iconfont">&#xe726;购物车居然是空的</span>
                       		<p>去逛逛</p>
                       </div>
                       
                       {/*为你推荐*/}
                       <div className='bir-a'>
				      		<p></p>
				      		<span>为你推荐</span>
				      		<p></p>			      		
				      	</div>
				      	
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
                    </div>
                </Router>
              
               	
               
            </div>
        )
    }
}

export default Cart;




