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
                {this.state.show && <div>  <p> {this.state.name}</p> <br /> <p> {this.state.email}</p> </div>}
            </div>
        )