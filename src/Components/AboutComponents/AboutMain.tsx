import * as React from 'react';
import Education from './Education';
import Languages from './Languages';
import IDEs from './IDEs';
import Other from './Other';
import Hobbies from './Hobbies';
import '../../Styles/About.css';

class AboutContent extends React.Component {
    render() {
        return (
            <div>
                <Education />
                <Languages />
                <IDEs />
                <Other />
                <Hobbies />
            </div>
        );
    }
}

export default AboutContent;