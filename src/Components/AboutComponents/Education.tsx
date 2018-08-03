import * as React from 'react';
import { Columns, Column } from 'bloomer';
import '../../Styles/Education.css';

class Education extends React.Component {
    render() {
        return (
            <Columns isCentered className='fixFlow'>
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
        );
    }
}

export default Education;