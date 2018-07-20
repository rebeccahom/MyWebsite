import * as React from 'react';
import '../Styles/NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="/">HOME</a>
                        <a className="navbar-item" href="/about">ABOUT</a>
                        <a className="navbar-item" href="#" >PORTFOLIO</a>
                    </div>
                    <div className="navbar-end">
                        <a className="navbar-item navbarIcon" href="https://github.com/rebeccahom">
                            <img src={require('../images/githubIcon.png')}/>
                        </a>
                        <a className="navbar-item navbarIcon" href="https://www.linkedin.com/in/rebecca-hom-683a00102">
                            <img src={require('../images/linkedInIcon.png')}/>
                        </a>
                    </div>
                </div >
            </div>
        );
    }
}

export default NavBar;