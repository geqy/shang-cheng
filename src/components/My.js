import React from 'react';

import {NavLink,BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import "../css/My.css"


class My extends React.Component{
    regist(e){
        this.props.history.push('/regist')
       
    }
    render(){
        return(
            <div>
                <header className="header1">个人中心</header>
                <Router>
                    <div>
                        <div className="div1">
                            <div className="div1-1">
                                
                            </div>
                            <span className="span1" onClick={this.regist.bind(this)}>登录/</span>
                            <span className="span2">注册</span>
                        </div>
                        <div className="div2">
                            <figure>
                                <figcaption>tu</figcaption>
                                <span>订单</span>
                            </figure>
                            <figure>
                                <figcaption>tu</figcaption>
                                <span>收藏</span>
                            </figure>
                            <figure>
                                <figcaption>tu</figcaption>
                                <span>优惠卷</span>
                            </figure>
                            <figure>
                                <figcaption>tu</figcaption>
                                <span>账户与安全</span>
                            </figure>
                        </div>
                        <div className="div3">
                        <figure>
                                <figcaption>tu</figcaption>
                                <span>常用联系方式</span>
                            </figure>
                            <figure>
                                <figcaption>tu</figcaption>
                                <span>分享邀请</span>
                            </figure>
                            <figure>
                                <figcaption>tu</figcaption>
                                <span>关于爱丽斯</span>
                            </figure>
                            <figure>
                                <figcaption>tu</figcaption>
                                <span>清除缓存</span>
                            </figure>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

export default My;