import * as React from 'react';
import '../../Styles/About.css';

export interface IAboutMainStateProps {
    showingBubbles: boolean;
}

export interface IAboutMainDispatchProps {
    showBubbles: () => void;
    hideBubbles: () => void;
}

export type IAboutMainProps = IAboutMainStateProps & IAboutMainDispatchProps;
class AboutContent extends React.Component<IAboutMainProps> {
    constructor(props: IAboutMainProps) {
        super(props);
    }

    generateBubbles() {
        return (
            <div id='showCircles'>
                <div className='flex'>
                    <div className='circle bounceAnimation' style={{backgroundColor: "#f48a78"}}>
                        <p className='centerCircleLabel'>EDUCATION</p></div>
                    <div className='circle bounceAnimation' style={{backgroundColor: "#eda277"}}>
                        <p className='centerCircleLabel'>LANGUAGES</p></div>
                    <div className='circle bounceAnimation' style={{backgroundColor: "#f6c98a"}}>
                        <p className='centerCircleLabel'>IDEs</p></div>
                </div>
                <div className='flex'>
                    <div className='circle bounceAnimation' style={{backgroundColor: "#e1d99c"}}>
                        <p className='centerCircleLabel'>OTHER</p></div>
                    <div className='circle bounceAnimation' style={{backgroundColor: "#bfead3"}}>
                        <p className='centerCircleLabel'>HOBBIES</p></div>
                </div>
            </div>);
    }

    render() {
        return (
            <div>
                {this.generateBubbles()}
            </div>
        );
    }
}

export default AboutContent;