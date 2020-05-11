import React from 'react';
import './App.css';
import Hamburguer from './Hamburguer';
import Navbar from './Navbar';
import Home from './Home';

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
				
			</>
		);
	}
}
export default App;
