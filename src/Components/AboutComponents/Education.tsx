import * as React from 'react';
import { Columns, Column } from 'bloomer';
import '../../Styles/About.css';

class Education extends React.Component {
    render() {
        return (
            <div className='header'>
            <h2>Education</h2>
            <Columns className='fixFlow'>
                <Column className='centered'>
                    <div>
                        <img src={require('../../images/tempIcon.png')}/>
                        <h3>NYU</h3>
                    </div>
                </Column>

                <Column className='centered'>
                    <img src={require('../../images/tempIcon.png')}/>
                    <h3>Major: Computer Science</h3>
                </Column>

                <Column className='centered'>
                    <img src={require('../../images/tempIcon.png')}/>
                    <h3>Minor: Web Design & Applications</h3>
                </Column>
            </Columns>
            </div>
        );
    }
}

export default Education;