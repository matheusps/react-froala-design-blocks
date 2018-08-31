import React, { Component } from 'react';
import Header from './Header/Header';
import Brand from './Header/Brand';
import Nav from './Header/Nav';
import NavLink from './Header/NavLink';

class App extends Component {
    render() {
        return (
            <div>
                <Header>
                    <Brand 
                    logo="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
                    height="50"
                    />
                    <Nav>
                        <NavLink link="https://www.froala.com" title="Example" />
                        <NavLink link="https://www.froala.com" title="Example 2" />
                    </Nav>
                </Header>
            </div>
        );
    }
}

export default App;