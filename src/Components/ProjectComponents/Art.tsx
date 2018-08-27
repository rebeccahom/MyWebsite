import * as React from 'react';
import '../../Styles/Art.css';

class Art extends React.Component {
    render() {
        return (
            <div className='mainArtStyle'>
                <ul id="hexGrid">
                    <li className="hex">
                        <a className="hexIn" href="#">
                            <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
                            <p>Some sample text about the article this hexagon leads to</p>
                        </a>
                    </li>
                    <li className="hex">
                        <a className="hexIn" href="#">
                            <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
                            <p>Some sample text about the article this hexagon leads to</p>
                        </a>
                    </li>
                    <li className="hex">
                        <a className="hexIn" href="#">
                            <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt="" />
                            <p>Some sample text about the article this hexagon leads to</p>
                        </a>
                    </li>
                    <li className="hex">
                        <a className="hexIn" href="#">
                            <img src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg" alt="" />
                            <p>Some sample text about the article this hexagon leads to</p>
                        </a>
                    </li>
                    <li className="hex">
                        <a className="hexIn" href="#">
                            <img src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg" alt="" />
                            <p>Some sample text about the article this hexagon leads to</p>
                        </a>
                    </li>
                    <li className="hex">
                        <a className="hexIn" href="#">
                            <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt="" />
                            <p>Some sample text about the article this hexagon leads to</p>
                        </a>
                    </li>
                    <li className="hex">
                        <a className="hexIn" href="#">
                            <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="" />
                            <p>Some sample text about the article this hexagon leads to</p>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Art;