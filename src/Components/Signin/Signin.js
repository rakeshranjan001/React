/* eslint-disable react/style-prop-object */
import React, { Component } from 'react'
import './Signin.css'
export default class Signin extends Component {

    constructor(props){
        super(props);
        this.state = {
            LoginEmail:'',
            LoginPassword:''
        }
    }
    onEmailChange = (event) => {
        this.setState({
            LoginEmail:event.target.value
        })
    }
    onPasswordChange = (event) => {
        this.setState({
            LoginPassword:event.target.value
        })
    }
    onSubmitSignin =() =>{
        fetch('https://node-masters.herokuapp.com/login',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify ({
                email: this.state.LoginEmail,
                password:this.state.LoginPassword
            })
        })
        this.props.onRouteChange('userhome')
    }

    render() {
        return (
            <div className="bg-black-80">
                <nav className="flex justify-between bb b--white-10 bg-black-90">
                    <a className="link white-70 hover-white no-underline flex items-center pa3" href="/">
                        <svg
                            className="dib h1 w1"
                            data-icon="grid"
                            viewBox="0 0 32 32"
                            >
                            <title>Super Normal Icon Mark</title>
                            <path d="M2 2 L10 2 L10 10 L2 10z M12 2 L20 2 L20 10 L12 10z M22 2 L30 2 L30 10 L22 10z M2 12 L10 12 L10 20 L2 20z M12 12 L20 12 L20 20 L12 20z M22 12 L30 12 L30 20 L22 20z M2 22 L10 22 L10 30 L2 30z M12 22 L20 22 L20 30 L12 30z M22 22 L30 22 L30 30 L22 30z">
                            </path>
                        </svg>
                    </a>
                    <div className="flex-grow pa3 flex items-center">
                        <a className="f6 link dib white dim mr3 mr4-ns" href="#0">About</a>
                        <a className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="#0">Sign Up</a>
                    </div>
                </nav>

                <div Style = "background-image : url(https://mrmrs.github.io/photos/u/011.jpg)">
                    <div className="pb5 pb6-m pb7-l bg-black-80">
                        <article className="mw5-5 center pa3 shadow-3 bg-white br4 pa3 pa4-ns pv2 ba b--black-10">
                            <p>Sign in to Doc Manage</p>
                            <main className="pa1">
                                <form className="measure right h-left fw2 f6 mt3 mb4">
                                    <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                                        <div className="mt3">
                                            <label htmlFor="email-address">Email</label>
                                            <input 
                                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                            type="email" 
                                            name="login-email" 
                                            id="email-address" 
                                            onChange={this.onEmailChange}
                                            />
                                        </div>
                                        <div className="mv3">
                                            <label htmlFor="password">Password</label>
                                            <input 
                                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                            type="password" 
                                            name="login-password" 
                                            id="password"
                                            onChange = {this.onPasswordChange} 
                                            />
                                        </div>
                                        <label>
                                            <input type="checkbox" /> Remember me
                                    </label>
                                    </fieldset>
                                    <div>
                                        <input 
                                        type="submit" 
                                        value="Sign in" 
                                        onKeyPress = {this.onSubmitSignin}
                                        />
                                    </div>
                                    <div className="lh-copy mt3">
                                        <a href="#0" className="f6 link dim black db">Sign up</a>
                                        <a href="#0" className="f6 link dim black db">Forgot your password?</a>
                                    </div>
                                </form>
                            </main>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}