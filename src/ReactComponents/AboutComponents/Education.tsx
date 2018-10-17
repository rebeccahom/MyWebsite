import * as React from 'react';
import '../../Styles/About.css';

class Education extends React.Component {
    render() {
        return (
            <div id="Education">
                <div>
                    <img src={require('../../images/NYULogo.jpg')} style={{height: '100px'}}/>
                    <p>I'm currently a senior in New York University majoring in Computer Science
                        and minoring in Web Programming & Applications. </p>

                    <p>Computer science related coursework that I've taken at NYU:</p>
                    <ul>
                        <li>Introduction to Computer Science</li>
                        <li>Calculus I</li>
                        <li>Data Structures</li>
                        <li>Computer Systems Organization</li>
                        <li>Basic Algorithms</li>
                        <li>Discrete Mathematics</li>
                        <li>Operating Systems</li>
                    </ul>

                    <p>Minor coursework:</p>
                    <ul>
                        <li>Introduction to Programming</li>
                        <li>Introduction to Web Design & Computer Principles</li>
                        <li>Database Design & Web Implementation</li>
                        <li>Web Development & Programming</li>
                        <li>Interactive Computing</li>
                    </ul>

                    <p>I'm currently taking</p>
                    <ul>
                        <li>Applied Internet Technology: Building websites and servers with JavaScript, Express.js, and MongoDB</li>
                        <li>Data Management and Analysis: Data scrubbing and analysis with Python, NumPy, Pandas, and PostgreSQL</li>
                        <li>Social Networks: Graph theory</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Education;