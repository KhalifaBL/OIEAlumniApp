import React, { Component } from "react";
import "./AddAlumni.css";
class AddAlumni extends Component {
  state = {
    name: null,
    lastName: null,
    age: null,
    email: null
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addAlumni(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label htmlFor="name">Name:</label>
            <input
              className="inputForm form-control"
              type="text"
              id="name"
              onChange={this.handleChange}
              placeholder="First Name"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="name">Last Name:</label>
            <input
              className="inputForm form-control"
              type="text"
              id="lastName"
              onChange={this.handleChange}
              placeholder="Last Name"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="age">Graduation:</label>
            <input
              className="inputForm form-control"
              type="date"
              id="graduation"
              onChange={this.handleChange}
              placeholder="Date"
              required
            />
          </div>
          <div class="form-group">
            <label type="age" htmlFor="age">
              Age:
            </label>
            <input
              className="inputForm form-control"
              type="number"
              id="age"
              onChange={this.handleChange}
              placeholder="Age"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="belt">Email:</label>
            <input
              className="inputForm form-control"
              type="text"
              id="email"
              placeholder="example@emporia.edu"
              onChange={this.handleChange}
              required
            />
          </div>
          <button className="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default AddAlumni;
