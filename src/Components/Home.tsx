import * as React from 'react';
import NavBar from './NavBar';
import About from './AboutContent';
import Contact from './ContactContent';
import Headline from './Headline';
import Footer from './Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../Styles/Home.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <BrowserRouter>
                    <Switch>
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/' component={Headline} />
                    </Switch>
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}

export default Home;