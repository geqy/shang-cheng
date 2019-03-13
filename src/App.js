import React, { Component } from 'react';
import './App.css';

import {NavLink,BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'

import Index from './components/Index'
import List from './components/List'
class App extends Component {
  render() {
    return (
      <div>
      	<Router>
      		<div>
      			<Switch>
      				<Route path="/index/index" component={Index}></Route>
      				<Route path="/index/list" component={List}></Route>
							
              <Redirect to="/index/index"/>
      				
      			</Switch>
      		</div>
      	
      	</Router>
        
      </div>
    );
  }
}

export default App;
