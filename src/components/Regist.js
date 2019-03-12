import React from 'react';

import {NavLink,BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import img from "../img/1.jpg"


class Regist extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <span className="iconfont">&#xe646;</span>
                    <span>注册</span>
                </header>
                <Router>
                    <div>
                       <header className="header1">
                           <span><img src={img}/></span>
                       </header>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Regist;