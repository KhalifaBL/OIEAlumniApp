import "./AddAlumni.css";
import React, { Component } from "react";
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
    this.resetForm();
  };
  resetForm = () => {
    document.getElementById("reset-form").reset();
  };

  render() {
    return (
      <div className="WrapperForm">
        <div className="formClosingWindow" onClick={this.props.closeForm}>
          <i class="far fa-window-close" />
        </div>
        <form id="reset-form" className="lateForm" onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label className="inputLabel" htmlFor="name">
              Name:
            </label>
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
            <label className="inputLabel" htmlFor="name">
              Last Name:
            </label>
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
            <label className="inputLabel" htmlFor="age">
              Graduation:
            </label>
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
            <label className="inputLabel" type="age" htmlFor="age">
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
            <label className="inputLabel" htmlFor="belt">
              Email:
            </label>
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
