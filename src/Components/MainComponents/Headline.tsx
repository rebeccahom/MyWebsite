import * as React from 'react';
import '../../Styles/Headline.css';
import Landscape from './Landscape';

class Headline extends React.Component {
    render() {
        return (
            <div>
                <div className="center" id="bigTitleFadeIn">
                    <h1>Hi, I'm Rebecca.</h1>
                    <h3>Student // Programmer // Designer</h3>
                    <p id="smallTitleFadeIn">Click on one of the links above to get started.</p>
                    <div id="heart"/>
                </div>
                <Landscape/>
            </div>
        );
    }
}

export default Headline;