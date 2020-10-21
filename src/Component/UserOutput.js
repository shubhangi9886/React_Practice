import React, { Component } from 'react';

class UserOutput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Soniya',
            State: 'Pune'
        }
    }

    ClickHandler = (e) => {
        e.preventDefault();
        this.setState({
            name: 'Aaliya',
            State: 'Mumbai'
        })
    }

    render() {
        return (
            <div>
                <form>
                    <h1>My Paragraph</h1>
                    <p>My name is {this.state.name} I am from {this.state.State}.<br /> Now I am doing Software Engineering in Navgurukul.<br /> In Navgurukul I learn so many things languages Like python, React.js, HTML, CSS.<br /> My dream becomes a Dancer. I like writing. <br />Before i was living in snehalaya so there also i learn so many things. .</p>
                    <button onClick={this.ClickHandler}>Switch</button>
                </form>
            </div>
        )
    }
}

export default UserOutput;