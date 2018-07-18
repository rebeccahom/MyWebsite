import * as React from 'react';
import '../Styles/NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="/">Home</a>
                        <a className="navbar-item" href="/about">About</a>
                        <a className="navbar-item" href="/portfolio" >Portfolio (coming soon)</a>
                        <a className="navbar-item" href="/contact">Contact</a>
                    </div>
                </div >
            </div>
        );
    }
}

export default NavBar;