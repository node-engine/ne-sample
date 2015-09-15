import React from 'react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

class PeopleHandler extends React.Component {

    render() {
        var self = this;

        var people = self.props.data.people.map((person, index)=>{
            return (
                <p key={index}>
                    {person.firstName} <br/>
                    {person.lastName}<br/>
                    {person.email}
                </p>
            )
        });

        return (
            <body>
                <Header />
                <h2 id="main-title">This is the PeopleHandler</h2>
                {people}
                <Footer />
            </body>
        )
    }
}

export default PeopleHandler