import React, { Component } from 'react';

class Header  extends Component {
    render() {
        return (
            <header>
                <div className="container text-center">
                    <div className="navbar navbar-expand-md">
                        {this.props.children}
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;