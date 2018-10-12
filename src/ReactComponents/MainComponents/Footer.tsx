import * as React from 'react';
import '../../Styles/Footer.css';

class FooterComponent extends React.Component {
    render() {
        return (
            <div id="sticky">
                <p> © Rebecca Hom </p>
                <p> rebecca.hom[at]nyu.edu </p>
                <p> Built with React + TypeScript </p>
            </div>
        );
    }
}

export default FooterComponent;