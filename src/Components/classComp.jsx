import  { Component } from 'react'

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            color:"Red",
            food :"Sandwich"
        }

        this.element = {
            name:"header",
            fun:"display"
        }
    }   

    render(){

        return(
            <div>
                <h1>This is Class Component, React Life Cycle methods</h1>
                <ol style={{textAlign:'start'}}>
                    <li>constructor()</li>
                    <li>getDerivedStateFromProps()</li>
                    <li>render() - ***</li>
                    <li>componentDidMount()</li>
                    <li>getDerivedStateFromProps()</li>
                </ol>

                <h2>My Fav food is {this.state.food} <br /> {this.element.fun} {this.element.name}</h2>
            </div>
        );
    }
}

export default Header;