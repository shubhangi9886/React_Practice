import React, { Component } from 'react';

class Card extends Component {
    state = {
        name: '',
        email: '',
        show: false,
        array: []
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        var array = this.state.array;
        var name = this.state.name
        var email = this.state.email
        array.push(name, email)
        this.setState({
            show: true,
            array: array,
            name: '',
            email: ''
        })
    }

    render() {
        console.log(this.state.name, this.state.email)
        return (
            <div className="card" style={{ border: '1px solid', width: '20%', height: '300px', marginLeft: '40%', marginTop: '4%' }}>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.name} name="name" onChange={this.handleChange}
                        style={{ marginTop: '4%', width: '75%', height: '30px', borderRadius: '15px' }}
                        type="text" placeholder="Name" />
                    <br />
                    <input value={this.state.email} name="email" onChange={this.handleChange}
                        style={{ marginTop: '6%', width: '75%', height: '30px', borderRadius: '15px' }}
                        type="text" placeholder="Email" />
                    <br />
                    <button type='submit' onClick={this.handleSubmit} style={{ marginTop: '6%', height: '30px' }}>Submit</button>
                </form>
                {this.state.array === [] ? null : this.state.array.map((array, index) => {
                    return <div key={index}>
                        <p>{array} </p>
                    </div>
                })}
            </div>
        )
    }
}

export default Card;