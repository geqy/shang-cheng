import React, { Component } from 'react';
import './App.css';

import {NavLink,BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'

import Index from './components/Index'

class App extends Component {
  render() {
    return (
      <div>
      	<Router>
      		<div>
      			<Switch>
      				<Route path="/index" component={Index}></Route>

              <Redirect to="/index"/>
      				
      			</Switch>
      		</div>
      	
      	</Router>
        
      </div>
    );
  }
}

export default App;
