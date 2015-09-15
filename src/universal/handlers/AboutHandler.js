import React from 'react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

class AboutHandler extends React.Component {

    render() {
        var self = this;
        return (
            <body>
                <Header />
                <h2 id="main-title">This is the AboutHandler</h2>
                <p>Test</p>
                <p>Path: {self.props.path}</p>
                <Footer />
            </body>
        )
    }
}

export default AboutHandler