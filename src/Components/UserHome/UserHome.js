import React from 'react';
import SimpleCard from '../Cards/SimpleCard';
import { Container } from 'react-floating-action-button'
import OverlayModal from '../Modal/OverlayModal';
import "./UserHome.css";
class UserHome extends React.Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
            showModal: false
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }


    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    componentDidMount() {
        fetch("http://node-masters.herokuapp.com/userhome", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: this.props.user.id
            })
        }).then(response => response.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    data: result
                });
                // console.log(this.state.data);
            }, (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            )
    }
    render() {
        const { onSignout } = this.props;
        const { data, isLoaded, error } = this.state;
        const {user} = this.props;
        if (error) {
            return (
                <div><h1>Error</h1></div>
            )
        }
        else if (!isLoaded) {
            return (
                <div><h3>Loading.......</h3></div>
            )
        }
        else {
            return (
                <div style={{ background: "https://mrmrs.github.io/photos/u/011.jpg" }} className="cover bg-left bg-center-l">
                    <OverlayModal
                            user = {user}
                            showModal={this.state.showModal}
                            handleCloseModal={this.handleCloseModal}
                            handleOpenModal={this.handleOpenModal}
                        />
                    <nav className="flex justify-between b--white-10 bg-black-90">
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
                                onClick={() => onSignout()}>Signout</button>
                        </div>
                    </nav>
                    <div>
                    <Container>
                        <button onClick={this.handleOpenModal}
                            className="f6 grow no-underline br-100 ph3 pv2 mb2 dib white bg-dark-blue" href="#0">
                            <img src="http://cdn.onlinewebfonts.com/svg/img_27177.png" alt="Add" height="20" width="20" ></img>
                        </button>
                    </Container>
                        </div>
                    <div className="flex flex-wrap">
                            <section style={{width:"95%", margin:"5px"}}>
                                {
                                    data.map(item => (
                                        <SimpleCard className="" key={item.url_id} url={item.url} summary={item.summary}></SimpleCard>
                                    ))
                                }
                            </section>
                    
                    </div>
                </div>
            );
        }
    }
}

export default UserHome;

