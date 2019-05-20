import React, { Component } from 'react';
import Home from './Home';
import Signin from './Components/Signin/Signin'
import Signup from './Components/Signup/Signup'
import UserHome from './Components/UserHome/UserHome'
class App extends Component {
  constructor() {
    super();
    this.onRouteChange = this.onRouteChange.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
    this.state = {
      route: 'signup',
      isSignedin: false,
      user: {
        name: '',
        email: '',
        joined:''
      }
    }
  }
  onSignIn = (data) => {
    this.setState({
      route:'UserHome',
      isSignedin: true,
      user:{
        name:data.name,
        email:data.email,
        joined:data.joined
      }
    })
  }
  onSignout = () => {
    this.setState({
      route:'Signin',
      isSignedin: false,
      user:{
        name:'',
        email:'',
        joined:''
      }
    })
  }
  onRouteChange = (route) => {
    this.setState({ route: route });
    console.log(this.state.route)
  }
  // componentDidMount(){
  //   fetch('https://node-masters.herokuapp.com/')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }
  render() {
    return (
      <div>{this.state.isSignedin === true ? <UserHome onRouteChange={this.onRouteChange} user={this.state.user} onSignout={this.onSignout}/> : (
        this.state.route === 'Home' ? <Home onRouteChange={this.onRouteChange} /> : (
          this.state.route === 'Signin' ? <Signin onRouteChange={this.onRouteChange} onSignIn ={this.onSignIn}/> :
            <Signup onRouteChange={this.onRouteChange} />
        )
      )
      }</div>
    )
  }
}
export default App;
