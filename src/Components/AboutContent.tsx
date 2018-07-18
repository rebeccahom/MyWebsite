import * as React from 'react';
import '../Styles/About.css';

class AboutContent extends React.Component {
    render() {
        return (
            <div className="aboutContent">
                <p>I am currently a junior at NYU in the College of Arts and Science majoring
                    in Computer Science and minoring in Web Programming and Applications.
                    Here is my coding experience: </p>
                <ul>
                    <li>Two years of Java</li>
                    <li>Two years of HTML/CSS</li>
                    <li>A little experience coding in Python, C, JavaScript, jQuery, PHP, and MySQL</li>
                </ul>
                <p>I also have some graphic design experience - I am familiar with Adobe Illustrator
                    and have made graphics that can be found in my portfolio.
            <br /><br />If you would like to see my resume, please inquire via my Contact page. Thank you!</p>
            </div>
        );
    }
}

export default AboutContent;