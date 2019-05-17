import React from 'react';
class UserHome extends React.Component {
    render() {
        return (
            <div>
                <div>
                     Welcome {this.props.user.name}
                     <p>you joined on {this.props.user.joined}</p>
                     <div>
                        your email address is {this.props.user.email}
                     </div>
                </div>
            </div>
        );
    }
}

export default UserHome;