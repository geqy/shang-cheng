import React from 'react';
import '../css/Home.css';
import {NavLink,BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'




class Home extends React.Component{
    render(){
        return(
            <div>
                <header>
                	<input type='text'/>

                </header>
                	<span className="tub">
                		<p className="iconfont">&#xe65b;</p>
                		<p>订单</p>
                	</span>
                
                <section>
                	
                </section>
                
            </div>
        )
    }
}

export default Home;