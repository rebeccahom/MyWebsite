import * as React from 'react';
import { Columns, Column } from 'bloomer';
import '../../Styles/About.css';

class Hobbies extends React.Component {
    render() {
        return (
            <div className='centered'>
                <h2>Hobbies</h2>
                {/*FIRST ROW*/}
                <Columns className='fixFlow'>
                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/tempIcon.png')}/>
                            <h3>Running</h3>
                        </div>
                    </Column>

                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/tempIcon.png')}/>
                            <h3>Games</h3>
                        </div>
                    </Column>

                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/tempIcon.png')}/>
                            <h3>Drawing</h3>
                        </div>
                    </Column>
                </Columns>

                {/*SECOND ROW*/}
                <Columns className='fixFlow'>
                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/tempIcon.png')}/>
                            <h3>Piano</h3>
                        </div>
                    </Column>

                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/tempIcon.png')}/>
                            <h3>Dogspotting</h3>
                        </div>
                    </Column>

                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/tempIcon.png')}/>
                            <h3>Food Advenures</h3>
                        </div>
                    </Column>
                </Columns>
            </div>

        );
    }
}

export default Hobbies;