import React from 'react';

class UserNav extends React.Component{
    render(){
        return(
            <nav className="flex justify-between bb b--white-10 bg-black-90">
                        <div className="dtc w2 v-mid pa3">
                            <a href="/" className="dib w2 h2 pa1 ba b--white-90 grow-large border-box">
                                <svg className="link white-90 hover-white" data-icon="skull" viewBox="0 0 32 32">
                                    <title>skull icon</title>
                                    <path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="flex-grow pa3 flex items-center">
                            <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/demo" >How it Works</a>
                            <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/about" >About</a>
                            <button className="f6 dib white hover-bg-white hover-black no-underline pv2 ph4 br-pill ba bg-black-90"
                                onClick={() => this.props.onSignout()}>Signout</button>
                        </div>
                    </nav>
        )
    }
}

export default UserNav;