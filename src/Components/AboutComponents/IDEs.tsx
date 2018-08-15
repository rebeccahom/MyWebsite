import * as React from 'react';
import { Columns, Column } from 'bloomer';
import '../../Styles/About.css';

class IDEs extends React.Component {
    render() {
        return (
            <div className='centered'>
                <h2 className='titleStyle'>IDEs</h2>
                {/*FIRST ROW*/}
                <Columns className='fixFlow'>
                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/tempIcon.png')}/>
                            <h3>Visual Studio Code</h3>
                        </div>
                    </Column>

                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/tempIcon.png')}/>
                            <h3>Eclipse</h3>
                        </div>
                    </Column>

                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/tempIcon.png')}/>
                            <h3>Sublime</h3>
                        </div>
                    </Column>
                </Columns>

                {/*SECOND ROW*/}
                <Columns className='fixFlow'>
                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/tempIcon.png')}/>
                            <h3>Atom</h3>
                        </div>
                    </Column>

                    <Column className='columnItem'/>

                    <Column className='columnItem'/>
                </Columns>
            </div>

        );
    }
}

export default IDEs;