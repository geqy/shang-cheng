import React from 'react';

import '../css/Home.css';
import { NavLink, BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { Carousel, WingBlank } from 'antd-mobile';
import banner1 from "../img/banner1.jpg"
import banner2 from "../img/banner2.jpg"
import banner3 from "../img/banner3.jpg"
import banner4 from "../img/banner4.jpg"
import chao from "../img/chao.jpg"
import left from "../img/left.jpg"
import right from "../img/right.jpg"
import xiari from "../img/xia-a.jpg"

import tuoxie from "../img/tuoxie.jpg"
import mao from "../img/mao.jpg"

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state ={
			data: [banner1, banner2, banner3,banner4],
    		imgHeight: 176,
		}
	}
	componentDidMount() {
		
	}
	tap(){
		window.location.href='/list';
	}
	render() {
		return(
			<div className='home'>
                <header>
                	<span className="iconfont">&#xe606;</span>
                	<input type='text' placeholder="搜索你想要的商品"  />
					<p className="iconfont">&#xe65b;</p>				
                </header>

                <section>
                	<WingBlank className='banner'>
				        <Carousel
				          autoplay={true}
				          infinite
				          slideWidth={1.05}
				        >
				          {this.state.data.map((item,i) => (
				            <a
				              key={i}
				              href="/list"
				              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
				            >
				              <img
				                src={item}
				                alt=""
				                style={{ width: '100%', height:'100%',verticalAlign: 'top' }}
				                onLoad={() => {
				                  // fire window resize event to change height
				                  window.dispatchEvent(new Event('resize'));
				                  this.setState({ imgHeight: 'auto' });
				                }}
				              />
				            </a>
				          ))}
				        </Carousel>
				    </WingBlank>
				    
			      	<div className="bir"></div>
			      	<div className='bir-a'>
			      		<p></p>
			      		<span>爱立撕专题活动</span>
			      		<p></p>			      		
			      	</div>
			     
			      	<div className='chao' onClick={this.tap.bind(this)}>
			      		<span><img src={chao}/></span>
			      	</div>
			    
			      
			      	<div className='xin'>
			      		<span><img src={left}/></span>
			      		<span><img src={right}/></span>
			      	</div>
			      
			      
			      	<div className="bir"></div>
			      	<div className='bir-a'>
			      		<p></p>
			      		<span>彩蛋下滑有</span>
			      		<p></p>

			      	</div>
			      
			      	<div className='chao'>
			      		<span><img src={xiari}/></span>
			      	</div>
			      	<div className="bir"></div>
			      	
			      	<div className='bir-a'>
			      		
			      		<span>玩转夏日风之单品推荐</span>
			      		

			      	</div>
			      	
			      	<div className='lunbo'>
				      	<div className='top-a'>
				      		<div>
				      			<span>
				      				<p>ADIDS拖鞋</p>
				      				<p>¥233</p>
				      			</span>
				      			<span>
				      				<img src={tuoxie} />
				      			</span>
				      		</div>
				      		<div>
				      			<span>
				      				<p>ADIDS拖鞋</p>
				      				<p>¥233</p>
				      			</span>
				      			<span>
				      				<img src={mao} />
				      			</span>
				      		</div>
				      		<div>
				      			<span>
				      				<p>ADIDS拖鞋</p>
				      				<p>¥233</p>
				      			</span>
				      			<span>
				      				<img src={tuoxie} />
				      			</span>
				      		</div>
				      		<div>
				      			<span>
				      				<p>ADIDS拖鞋</p>
				      				<p>¥233</p>
				      			</span>
				      			<span>
				      				<img src={mao} />
				      			</span>
				      		</div>
				      		<div>
				      			<span>
				      				<p>ADIDS拖鞋</p>
				      				<p>¥233</p>
				      			</span>
				      			<span>
				      				<img src={tuoxie} />
				      			</span>
				      		</div>
				      	</div>
				      	
			      	</div>
			      	
			      	
			      	<div className='bir-a'>
			      		<p></p>
			      		<span>下滑更精彩</span>
			      		<p></p>

			      	</div>
			      	
			      	<div className='chao'>
			      		<span><img src={xiari}/></span>
			      	</div>
			      	
			      	<div className="bir"></div>
			      	
			      	<div className='bir-a'>
			      		
			      		<span>玩转夏日风之单品推荐</span>
			      		

			      	</div>
			      	
                </section>
                
            </div>
		)
	}
}

export default Home;