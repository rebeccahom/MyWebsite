import * as React from 'react';
import { Columns, Column } from 'bloomer';
import '../../Styles/About.css';

class Other extends React.Component {
    render() {
        return (
            <div className='centered'>
                <h2>Other</h2>
                {/*FIRST ROW*/}
                <Columns className='fixFlow'>
                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/GitLogo.png')}/>
                            <h3>Git</h3>
                        </div>
                    </Column>

                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/GitExtensionsLogo.png')}/>
                            <h3>Git Extensions</h3>
                        </div>
                    </Column>

                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/tempIcon.png')}/>
                            <h3>Command Line Interface</h3>
                        </div>
                    </Column>
                </Columns>

                {/*SECOND ROW*/}
                <Columns className='fixFlow'>
                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/IllustratorLogo.png')}/>
                            <h3>Adobe Illustrator</h3>
                        </div>
                    </Column>

                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/ps.png')}/>
                            <h3>Adobe Photoshop</h3>
                        </div>
                    </Column>

                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/postman.png')}/>
                            <h3>Postman</h3>
                        </div>
                    </Column>
                </Columns>

                {/*THIRD ROW*/}
                <Columns className='fixFlow'>
                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/OSXLogo.png')}/>
                            <h3>Mac OS X</h3>
                        </div>
                    </Column>

                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/Windows10.png')}/>
                            <h3>Windows 10</h3>
                        </div>
                    </Column>

                    <Column className='columnItem'/>
                </Columns>
            </div>

        );
    }
}

export default Other;