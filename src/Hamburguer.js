import React, { Component } from 'react';
import Menu from './Images/menu.png';
import Navbar from './Navbar';


class Hamburguer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: true,
        };
    }
    changeState() {
        this.setState(prevState => (
            { clicked: !prevState.clicked}
        ));
    }
    render() {
        const className = this.state.clicked ? 'show' : 'hide';
        return (
            <>
            <div className='hamburguerBox'>
                <img onClick={(e) => this.changeState(e)} src={Menu} className='menuIcon'></img>
            </div>
            <div className={className}>
                <Navbar></Navbar>
            </div>
            </>
        )
    }

}
export default Hamburguer;