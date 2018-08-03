import * as React from 'react';
import { Column, Columns, Container, Content, Footer } from 'bloomer';
import '../Styles/Footer.css';

class FooterComponent extends React.Component {
    render() {
        return (
            <Footer id="sticky">
                <Container>
                    <Content>
                        <Columns>
                            <Column isSize={"full"}>
                                <p> © Rebecca Hom </p>
                                <p> rebecca.hom[at]nyu.edu </p>
                                <p> Built with React + TypeScript </p>
                            </Column>
                        </Columns>
                    </Content>
                </Container>
            </Footer>
        );
    }
}

export default FooterComponent;