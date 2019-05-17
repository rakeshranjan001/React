import React from 'react'
import './Signin.css'
class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange = (event) => {
        this.setState({
            signInEmail: event.target.value
        })
    }
    onPasswordChange = (event) => {
        this.setState({
            signInPassword: event.target.value
        })
    }
    onSubmitSignin = () => {
        fetch("https://node-masters.herokuapp.com/login", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(data => {
                this.props.onSignIn(data)
                // console.log(data)
            })
    }
    render() {
        // const { onRouteChange } = this.props;
        return (
            <div className="cover bg-left bg-center-l">
                <nav className="flex justify-between bb b--white-10 bg-black-90">
                    <div className="dtc w2 v-mid pa3">
                        <a href="/" className="dib w2 h2 pa1 ba b--white-90 grow-large border-box">
                            <svg className="link white-90 hover-white" data-icon="skull" viewBox="0 0 32 32"><title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
                        </a>
                    </div>
                    <div className="flex-grow pa3 flex items-center">
                        <a className="f6 link dib white dim mr3 mr4-ns" href="/" >About</a>
                        <a className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="#0">Sign Up</a>
                    </div>
                </nav>

                <div style={{ background: "https://mrmrs.github.io/photos/u/011.jpg" }}>
                    <div className="pb5 pb6-m pb7-l bg-black-80">
                        <article className="mw5-5 center pa3 shadow-3 bg-white br4 pa3 pa4-ns pv2 ba b--black-10">
                            <p>Sign in to Doc Manage</p>
                            <main className="pa1">
                                <div className="measure right h-left fw2 f6 mt3 mb4">
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
                                                onChange={this.onPasswordChange}
                                            />
                                        </div>
                                        <label>
                                            <input type="checkbox" /> Remember me
                                    </label>
                                    </fieldset>
                                    <div>
                                        <input
                                            type="submit"
                                            className="f6 link dim ba ph3 pv2 mb2 dib near-black"
                                            onClick={this.onSubmitSignin}
                                            value="Signin" />
                                    </div>
                                    <div className="lh-copy mt3">
                                        <a href="/recover" className="f6 link dim black db">Forgot your password?</a>
                                    </div>
                                </div>
                            </main>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signin
