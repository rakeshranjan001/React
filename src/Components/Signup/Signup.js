import React from 'react'
import './Signup.css'
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Email: '',
            Password: ''
        }
    }
    onEmailChange = (event) => {
        this.setState({
            Email: event.target.value
        })
    }
    onPasswordChange = (event) => {
        this.setState({
            Password: event.target.value
        })
    }
    onNameChange = (event) => {
        this.setState({
            Name: event.target.value
        })
    }
    onSubmitSignup = () => {
        fetch("https://node-masters.herokuapp.com/signup", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.Email,
                password: this.state.Password,
                name: this.state.Name
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }
    render() {
        const { onRouteChange } = this.props;
        return (
            <div className="cover bg-left bg-center-l bg-black-80 pb5 pb6-m pb7-l">
                <nav className="flex justify-between bb b--white-10 bg-black-90">
                    <div className="dtc w2 v-mid pa3">
                        <a href="/" className="dib w2 h2 pa1 ba b--white-90 grow-large border-box">
                            <svg className="link white-90 hover-white" data-icon="skull" viewBox="0 0 32 32"><title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
                        </a>
                    </div>
                    <div className="dtc v-mid tr pa3">
                        <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/demo" >How it Works</a>
                        <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/about" >About</a>
                        <button className="f6 dib white hover-bg-white hover-black no-underline pv2 mh1 ph3 br-pill bg-black-80" onClick={() => onRouteChange('Signin')}>Signin</button>
                    </div>
                </nav>
                <div style={{ background: "https://mrmrs.github.io/photos/u/011.jpg" }}>
                    <div className="pa5 pb5 pb7 bg-black-80">
                        <article className="mw5-5 center pa3 shadow-3 bg-white br4 pa3 pa4-ns pv2 ba b--black-10">
                            <p>Sign up to Doc Manage</p>
                            <main className="pa1">
                                <div className="measure right h-left fw2 f6 mt3">
                                    <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                                        <div className="mt3">
                                            <label htmlFor="Name">Name</label>
                                            <input
                                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                                type="Name"
                                                name="Name"
                                                id="Name"
                                                onChange={this.onNameChange}
                                            />
                                        </div>
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
                                        <div className="mt3 pb2">
                                            <label htmlFor="password">Password</label>
                                            <input
                                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
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
                                            className="f6 link dim ba ph1 pv2 mb2 dib near-black"
                                            onClick={this.onSubmitSignup}
                                            value="Signup" />
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

export default Signup
