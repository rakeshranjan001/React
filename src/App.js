import React, { Component } from 'react';
import Home from './Home';
import Signin from './Components/Signin/Signin'
import Signup from './Components/Signup/Signup'

class App extends Component {
  constructor() {
    super();
    this.onRouteChange = this.onRouteChange.bind(this);
    this.state = {
      route: 'Home'
    }
  }
  onRouteChange = (route) => {
    this.setState({ route:route });
    console.log(this.state.route)
  }
  componentDidMount(){
    fetch('http://node-masters.herokuapp.com/')
    .then(response => response.json())
    .then(data => console.log(data))
  }
  render() {
    return (
      <div >{
        this.state.route === 'Home' ? <Home onRouteChange={this.onRouteChange}/> 
        :(this.state.route ==='Signin'? <Signin onRouteChange={this.onRouteChange} />:<Signup onRouteChange={this.onRouteChange}/>)
      }
      </div>
    )
  }
}
export default App;
