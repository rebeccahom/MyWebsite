import * as React from 'react';
import '../../Styles/Headline.css';

class Headline extends React.Component {
    render() {
        return (
            <div className="center" id="bigTitleFadeIn">
                <h1>Hi, I'm Rebecca.</h1>
                <h3>Student // Programmer // Designer</h3>
                <p className="smallTitleFadeIn">Click on one of the links above to get started.</p>
                <p className="smallTitleFadeIn">(Site is still under construction, but feel free to take a look around!)</p>
                <div id="heart"/>
            </div>
        );
    }
}

export default Headline;