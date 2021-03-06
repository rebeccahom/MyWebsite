import * as React from 'react';
import NavBar from './MainComponents/NavBar';
import About from './AboutComponents/About/AboutContainer';
import Headline from './MainComponents/Headline';
import Footer from './MainComponents/Footer';
import Portfolio from './ProjectComponents/LandingPage';
import Art from './ProjectComponents/Art';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../Styles/Home.css';
import Background from './MainComponents/BackgroundP5Wrapper';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Background/>
                    <NavBar />
                    <BrowserRouter>
                        <Switch>
                            <Route path='/about' component={About} />
                            <Route path='/portfolio/art' component={Art}/>
                            <Route path='/portfolio' component={Portfolio} />
                            <Route path='/' component={Headline} />
                        </Switch>
                    </BrowserRouter>
                <Footer />
            </div>
        );
    }
}

export default Home;