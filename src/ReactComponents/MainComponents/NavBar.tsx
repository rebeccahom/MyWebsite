import * as React from 'react';
import '../../Styles/NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <ul className="navbar-menu">
                    <li><a href="/" className="navbar-item">HOME</a></li>
                    <li><a href="/about" className="navbar-item">ABOUT</a></li>
                    <li><a href="/portfolio" className="navbar-item">PORTFOLIO</a></li>
                    <li>
                        <a href="https://github.com/rebeccahom" className="navbar-item navbarIcon">
                            <img src={require('../../images/githubIcon.png')}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/rebecca-hom-683a00102" className="navbar-item navbarIcon">
                            <img src={require('../../images/linkedInIcon.png')}/>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavBar;