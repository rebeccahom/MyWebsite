import * as React from 'react';
import '../../Styles/About.css';

class Education extends React.Component {
    render() {
        return (
            <div id='Education'>
                <h2 className='titleStyle'>EDUCATION</h2>
                <div>
                    <img src={require('../../images/NYULogo.jpg')} style={{height: '100px'}} className='captionFix'/>
                    <p>I'm currently a senior in New York University majoring in Computer Science
                        and minoring in Web Programming & Applications. </p>
                </div>
            </div>
        );
    }
}

export default Education;