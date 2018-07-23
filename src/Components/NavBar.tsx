import * as React from 'react';
import '../Styles/NavBar.css';
import { Navbar, NavbarMenu, NavbarItem, NavbarStart, NavbarEnd } from 'bloomer';

class NavBar extends React.Component {
    render() {
        return (
            <Navbar>
                <NavbarMenu>
                    <NavbarStart>
                        <NavbarItem href="/">HOME</NavbarItem>
                        <NavbarItem href="/about">ABOUT</NavbarItem>
                        <NavbarItem href="#">PROJECTS</NavbarItem>
                    </NavbarStart>
                    <NavbarEnd>
                        <NavbarItem href="https://github.com/rebeccahom" className="navbar-item navbarIcon">
                            <img src={require('../images/githubIcon.png')}/>
                        </NavbarItem>
                        <NavbarItem href="https://www.linkedin.com/in/rebecca-hom-683a00102" className="navbar-item navbarIcon">
                            <img src={require('../images/linkedInIcon.png')}/>
                        </NavbarItem>
                    </NavbarEnd>
                </NavbarMenu>
            </Navbar>
        );
    }
}

export default NavBar;