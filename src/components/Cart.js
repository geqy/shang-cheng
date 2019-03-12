import React from 'react';
import '../css/Cart.css';
import {NavLink,BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'


class Cart extends React.Component{
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
                       <div className="tui">
                       		<p></p>
                       		<h6>为你推荐</h6>
                       		<p></p>
                       </div>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Cart;