import React from 'react';

import {NavLink,BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import "../css/My.css"


class My extends React.Component{
    render(){
        return(
            <div>
                <header>个人中心</header>
                <Router>
                    <div>
                        <div className="div1">
                            <span className="span1">登录/</span>
                            <span className="span2">注册</span>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

export default My;