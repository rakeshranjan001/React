import React from 'react';
class UserHome extends React.Component {
    render() {
        return (
            <div className="cover bg-left bg-center-l" style={{ background: "https://mrmrs.github.io/photos/u/011.jpg" }}>
                <nav className="flex justify-between bb b--white-10 bg-black-90">
                    <div className="dtc w2 v-mid pa3">
                        <a href="/" className="dib w2 h2 pa1 ba b--white-90 grow-large border-box">
                            <svg className="link white-90 hover-white" data-icon="skull" viewBox="0 0 32 32"><title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
                        </a>
                    </div>
                    <div className="flex-grow pa3 flex items-center">
                        <a className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/demo" >How it Works</a>
                        <a className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/about" >About</a>
                        <button className="f6 dib white hover-bg-white hover-black no-underline pv2 ph4 br-pill ba bg-black-90" onClick={() => this.props.onSignout}>Signout</button>
                    </div>
                </nav>

                <div >
                    <div className="pb pa5 pb6-m pb7 bg-black-80">
                        <article class="mb6 pa5 mw5 center bg-white br3 pa3 pa4-ns ba b--black-10">
                            <div class="measure right h-left fw2 f6 mt3 mb4 ">
                                <img class="br-100 h3 w3 dib"
                                    src="https://curaflo.com/wp-content/uploads/2017/04/male-avatar1.png"
                                    title="avatar" alt="" />

                                <h1 class="f4">Welcome {this.props.user.name}</h1>
                                <hr class="mw3 bb bw1 b--black-10" />
                            </div>
                            <p class="lh-copy measure center f6 black-70">
                                {this.props.user.email}
                            </p>
                            <p class="lh-copy measure center f6 black-70">
                                You joined on {this.props.user.joined}
                            </p>
                        </article>


                    </div>
                </div>
            </div>
        );
    }
}

export default UserHome;