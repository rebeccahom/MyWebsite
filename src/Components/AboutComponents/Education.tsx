import * as React from 'react';
import { Columns, Column } from 'bloomer';
import '../../Styles/About.css';

class Education extends React.Component {
    render() {
        return (
            <div className='header'>
            <h2 className='titleStyle'>Education</h2>
            <Columns className='fixFlow'>
                <Column className='columnItem'>
                    <div>
                        <img src={require('../../images/NYULogo.jpg')} style={{height: '100px'}}/>
                        <h3>New York University</h3>
                    </div>
                </Column>

                <Column className='columnItem'>
                    <img src={require('../../images/ComputerIcon.png')} style={{width: '110px', height: '110px'}}/>
                    <h3>Major:</h3><p>Computer Science</p>
                </Column>

                <Column className='columnItem'>
                    <img src={require('../../images/WebDesign.png')}/>
                    <h3>Minor:</h3><p>Web Design & Applications</p>
                </Column>
            </Columns>
            </div>
        );
    }
}

export default Education;