import React from 'react';
import './App.css';
import Hamburguer from './Hamburguer';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Post from './Post';
import Ads from './Ads';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: ''
		};
		this.childHandler = this.childHandler.bind(this)
	}
	childHandler(dataFromChild){
		this.setState({
			data: dataFromChild
		}, () => console.log(this.state))
	}

	render(){
		return (
			<>
				<Hamburguer action={this.childHandler}/>
				<div className={this.state.data} >
                    <Navbar ></Navbar>
                </div>
				<Router>
					<Route exact path="/home" component={Home} />
		        	<Route path="/post" component={Post} />
		        	<Route path="/ads" component={Ads} />
				</Router>
			</>
		);
	}
}
export default App;
