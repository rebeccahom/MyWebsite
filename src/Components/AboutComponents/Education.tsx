import * as React from 'react';
import { Columns, Column } from 'bloomer';
import '../../Styles/About.css';

class Education extends React.Component {
    render() {
        return (
            <div className='header'>
            <h2>Education</h2>
            <Columns className='fixFlow'>
                <Column className='columnItem'>
                    <div>
                        <img src={require('../../images/tempIcon.png')}/>
                        <h3>NYU</h3>
                    </div>
                </Column>

                <Column className='columnItem'>
                    <img src={require('../../images/tempIcon.png')}/>
                    <h3>Major:</h3><p>Computer Science</p>
                </Column>

                <Column className='columnItem'>
                    <img src={require('../../images/tempIcon.png')}/>
                    <h3>Minor:</h3><p>Web Design & Applications</p>
                </Column>
            </Columns>
            </div>
        );
    }
}

export default Education;