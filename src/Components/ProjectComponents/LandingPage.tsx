import * as React from 'react';
import { Button, Columns, Column } from 'bloomer';
import '../../Styles/LandingPage.css';

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <Columns className='landingFixFlow'>
                    <Column isSize="1/2" hasTextAlign="centered">
                        <Button className='buttonStyle' href='portfolio/art'>ART
                        <div className='buttonShadow'/>
                        </Button>
                    </Column>
                    <Column isSize="1/2" hasTextAlign="centered">
                        <Button className='buttonStyle' href='/portfolio/projects'>PROJECTS
                        <div className='buttonShadow'/>
                        </Button>
                    </Column>
                </Columns>
            </div>
        );
    }
}

export default LandingPage;