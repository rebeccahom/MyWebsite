import * as React from 'react';
import '../../../Styles/About.css';
import Education from '../Education';
import Languages from '../Languages';

export interface IAboutMainStateProps {
    isShowingBubbles: boolean;
    currentPage: string;
}

export interface IAboutMainDispatchProps {
    showBubbles: () => void;
    hideBubbles: () => void;
    changePage: (page: string) => void;
}

export type IAboutMainProps = IAboutMainStateProps & IAboutMainDispatchProps;
class AboutMain extends React.Component<IAboutMainProps> {
    constructor(props: IAboutMainProps) {
        super(props);
    }

    generateBubbles() {
        return (
            <div>
                <div className='flex'>
                    <div className='circle' style={{backgroundColor: "#f48a78"}}
                        onClick={() => {this.props.hideBubbles(); this.props.changePage("Education"); }}>
                        <p className='centerCircleLabel'>EDUCATION</p></div>
                    <div className='circle' style={{backgroundColor: "#eda277"}}>
                        <p className='centerCircleLabel'>LANGUAGES</p></div>
                    <div className='circle' style={{backgroundColor: "#f6c98a"}}>
                        <p className='centerCircleLabel'>IDEs</p></div>
                </div>
                <div className='flex'>
                    <div className='circle' style={{backgroundColor: "#e1d99c"}}>
                        <p className='centerCircleLabel'>OTHER</p></div>
                    <div className='circle' style={{backgroundColor: "#bfead3"}}>
                        <p className='centerCircleLabel'>HOBBIES</p></div>
                </div>
            </div>);
    }

    generateTabs() {
        return (
            <div id="tabStyle">
                <ul id="tabs">
                    <li onClick={() => this.props.changePage("Education")}>Education</li>
                    <li onClick={() => this.props.changePage("Languages")}>Languages</li>
                    <li>IDEs</li>
                    <li>Other</li>
                    <li>Hobbies</li>
                </ul>
            </div>
        );
    }

    generateContent() {
        if (this.props.currentPage === "Education") {
            return (
                <div>
                    {this.generateTabs()}
                    <Education />
                </div>
            );
        } else if (this.props.currentPage === "Languages") {
            return (
                <div>
                    {this.generateTabs()}
                    <Languages />
                </div>
            );
        } else {
            return (
                <div>
                    {this.generateTabs()}
                </div>
            );
        }
         /*else if (this.props.currentPage === "IDEs") {
            return (
                <div>
                    {this.generateTabs()}
                    <IDEs />
                </div>
            );
        } else if (this.props.currentPage === "Other") {
            return (
                <div>
                    {this.generateTabs()}
                    <Other />
                </div>
            );
        } else if (this.props.currentPage === "Hobbies") {
            return (
                <div>
                    {this.generateTabs()}
                    <Hobbies />
                </div>
            );
        }*/
    }

    render() {
        return (
            <div id='aboutStyle'>
                {this.props.isShowingBubbles ? this.generateContent() : <div/>}
            </div>
        );
    }
}

export default AboutMain;