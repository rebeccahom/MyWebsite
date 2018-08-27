import * as React from 'react';
import NavBar from './MainComponents/NavBar';
import About from './AboutComponents/AboutMain';
import Headline from './MainComponents/Headline';
import Footer from './MainComponents/Footer';
import Portfolio from './ProjectComponents/LandingPage';
import Art from './ProjectComponents/Art';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../Styles/Home.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className='pushFooter'>
                <NavBar />
                <BrowserRouter>
                    <Switch>
                        <Route path='/about' component={About} />
                        <Route path='/portfolio/art' component={Art}/>
                        <Route path='/portfolio' component={Portfolio} />
                        <Route path='/' component={Headline} />
                    </Switch>
                </BrowserRouter>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;