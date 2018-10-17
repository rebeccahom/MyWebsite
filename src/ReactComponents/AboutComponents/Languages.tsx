import * as React from 'react';
import '../../Styles/Languages.css';

class Languages extends React.Component {
    proficientBox() {
        return (
            <div className='toolbox'>
                <div className='rows'>
                    <div className='container'>
                        <div className='overlay'><p>Java</p></div>
                        <img src={require('../../images/JavaLogo.png')} className='imgSizing'/>
                    </div>
                    <div className='container'>
                        <div className='overlay'><p>JavaScript</p></div>
                        <img src={require('../../images/JavaScriptLogo.png')} className='imgSizing'/>
                    </div>
                    <div className='container'>
                        <div className='overlay'><p>Python</p></div>
                        <img src={require('../../images/python.png')} className='imgSizing'/>
                    </div>
                </div>

                <div className='rows'>
                <div className='container'>
                    <div className='overlay'><p>React</p></div>
                    <img src={require('../../images/React.png')} className='imgSizing'/>
                </div>
                <div className='container'>
                    <div className='overlay'><p>Redux</p></div>
                    <img src={require('../../images/redux.png')} className='imgSizing'/>
                </div>
                <div className='container'>
                    <div className='overlay'><p>TypeScript</p></div>
                    <img src={require('../../images/TypeScriptLogo.png')} className='imgSizing'/>
                </div>
                </div>

                <div className='rows'>
                <div className='container'>
                    <div className='overlay'><p>HTML5</p></div>
                    <img src={require('../../images/HtmlLogo.png')} className='imgSizing'/>
                </div>
                <div className='container'>
                    <div className='overlay'><p>CSS3</p></div>
                    <img src={require('../../images/CSSLogo.png')} className='imgSizing'/>
                </div>
                <div className='container'/>
                </div>
            </div>
        );
    }

    beginnerBox() {
        return (
            <div className='toolbox'>
                <div className='rows'>
                    <div className='container'>
                        <div className='overlay'><p>Processing</p></div>
                        <img src={require('../../images/processing.png')} className='imgSizing'/>
                    </div>
                    <div className='container'>
                        <div className='overlay'><p>jQuery</p></div>
                        <img src={require('../../images/jQueryLogo.png')} className='imgSizing'/>
                    </div>
                    <div className='container'>
                        <div className='overlay'><p>PHP</p></div>
                        <img src={require('../../images/PHPLogo.png')} className='imgSizing'/>
                    </div>
                </div>

                <div className='rows'>
                    <div className='container'>
                        <div className='overlay'><p>MySQL</p></div>
                        <img src={require('../../images/sql.png')} className='imgSizing'/>
                    </div>
                    <div className='container'/>
                    <div className='container'/>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div id="Languages">
                <h3>Proficient Toolbox</h3>
                <h4>Languages that I'm proficient/advanced in</h4>
                {this.proficientBox()}

                <h3>Beginner Toolbox</h3>
                <h4>Languages that I've had exposure to and/or worked with at some point in the past</h4>
                {this.beginnerBox()}
            </div>
        );
    }
}

export default Languages;
