import * as React from 'react';
import { Columns, Column } from 'bloomer';
import '../../Styles/About.css';

class Languages extends React.Component {
    render() {
        return (
            <div className='centered'>
                <h2 className='titleStyle'>Languages</h2>
                <h4 className='smallerTitle'>PROFICIENT</h4>
                {/*FIRST ROW*/}
                <Columns className='fixFlow'>
                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/JavaLogo.png')} style={{width: '90px'}}/>
                            <h3>Java</h3>
                        </div>
                    </Column>

                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/JavaScriptLogo.png')}/>
                            <h3>JavaScript</h3><p>(ECMAScript 6)</p>
                        </div>
                    </Column>

                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/React.png')} style={{width: '130px'}}/>
                            <h3>React</h3>
                        </div>
                    </Column>
                </Columns>

                {/*SECOND ROW*/}
                <Columns className='fixFlow'>
                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/redux.png')}/>
                            <h3>Redux</h3>
                        </div>
                    </Column>

                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/TypeScriptLogo.png')}/>
                            <h3>TypeScript</h3>
                        </div>
                    </Column>

                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/HtmlLogo.png')}/>
                            <h3>HTML5</h3>
                        </div>
                    </Column>
                </Columns>

                {/*THIRD ROW*/}
                <Columns className='fixFlow'>
                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/CSSLogo.png')}/>
                            <h3>CSS3</h3>
                        </div>
                    </Column>

                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/processing.png')}/>
                            <h3>Processing</h3>
                        </div>
                    </Column>

                    <Column className='columnItem'/>
                </Columns>

                <h4 className='smallerTitle'>FAMILIAR WITH</h4>
                {/*FOURTH ROW*/}
                <Columns className='fixFlow'>
                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/python.png')}/>
                            <h3>Python</h3>
                        </div>
                    </Column>

                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/jQueryLogo.png')}/>
                            <h3>jQuery</h3>
                        </div>
                    </Column>

                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/PHPLogo.png')} style={{width: '130px'}}/>
                            <h3>PHP</h3>
                        </div>
                    </Column>
                </Columns>

                {/*FIFTH ROW*/}
                <Columns className='fixFlow'>
                    <Column className='columnItem'>
                        <div>
                            <img src={require('../../images/sql.png')} style={{width: '130px'}}/>
                            <h3>MySQL</h3>
                        </div>
                    </Column>

                    <Column className='columnItem'/>

                    <Column className='columnItem'/>
                </Columns>
            </div>
        );
    }
}

export default Languages;