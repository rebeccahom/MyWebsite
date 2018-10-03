import * as React from "react";
import p5 from "p5";
import backgroundSketch from "./Background.js";
import "../../Styles/Home.css";

class BackgroundWrapper extends React.Component {
    componentDidMount() {
        this.canvas = new p5(backgroundSketch, "background");
    }

    shouldComponentUpdate() { // just in case
        return false;
    }

    componentWillUnmount() {
        this.canvas.remove();
    }

    render() {
        return(
            <div id="backgroundSketch"/>
        );
    }
}

export default BackgroundWrapper;
