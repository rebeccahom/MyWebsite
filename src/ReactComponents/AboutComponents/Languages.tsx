import * as React from 'react';
import '../../Styles/Languages.css';

class Languages extends React.Component {
    proficientBox() {
        return (
            <div id='proficientBox'>
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
            </div>
        );
    }

    render() {
        return (
            <div id="Languages">
            <h3>Proficient Toolbox</h3>
                {this.proficientBox()}
            </div>
        );
    }
}

export default Languages;
