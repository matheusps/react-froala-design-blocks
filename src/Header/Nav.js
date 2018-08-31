import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <ul className="navbar-nav mr-auto ml-auto">
                {this.props.children}
            </ul>
        );
    }
}

export default Nav;