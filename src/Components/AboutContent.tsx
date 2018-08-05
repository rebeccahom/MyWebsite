import * as React from 'react';
import Education from './AboutComponents/Education';
import Languages from './AboutComponents/Languages';
import '../Styles/About.css';

class AboutContent extends React.Component {
    render() {
        return (
            <div>
                <Education />
                <Languages />
            </div>
        );
    }
}

export default AboutContent;

/*
            <div className="aboutContent">
                <p>I'm a senior at NYU in the College of Arts and Science majoring
                    in Computer Science and minoring in Web Programming and Applications.
                    Here is my coding experience: </p>
                <ul>
                    <li>Proficient in Java, JavaScript and React/Redux</li>
                    <li>Fairly adept in HTML/CSS, TypeScript, and Processing</li>
                    <li>Familiar with Python, jQuery, PHP, and MySQL</li>
                </ul>

                <p>I have experience working with git and IDEs such as Visual Studio Code,
                    Eclipse, Sublime, and Atom.
                </p>
                <p>I also have some graphic design experience - my graphics can be found in my portfolio as well as
                    my coding projects.</p>
                <p>If you would like to see my resume, please inquire via my Contact page. Thank you!</p>
            </div>
*/