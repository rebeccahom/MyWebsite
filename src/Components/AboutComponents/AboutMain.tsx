import * as React from 'react';
import '../../Styles/About.css';
/*import Education from './Education';
import Languages from './Languages';
import IDEs from './IDEs';
import Other from './Other';
import Hobbies from './Hobbies';*/

class AboutContent extends React.Component {
    render() {
        return (
            <div id='showCircles'>
                <div className='flex'>
                    <div className='circle' style={{backgroundColor: "#f48a78"}}><p className='centerCircleLabel'>EDUCATION</p></div>
                    <div className='circle' style={{backgroundColor: "#eda277"}}><p className='centerCircleLabel'>LANGUAGES</p></div>
                    <div className='circle' style={{backgroundColor: "#f6c98a"}}><p className='centerCircleLabel'>IDEs</p></div>
                </div>
                <div className='flex'>
                    <div className='circle' style={{backgroundColor: "#e1d99c"}}><p className='centerCircleLabel'>OTHER</p></div>
                    <div className='circle' style={{backgroundColor: "#bfead3"}}><p className='centerCircleLabel'>HOBBIES</p></div>
                </div>
            </div>
        );
    }
}

export default AboutContent;