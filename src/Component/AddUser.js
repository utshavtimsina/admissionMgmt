import React, { Component } from "react";

class AddUser extends Component {
  state = {
    user: null,
  };
  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    });
  };
  updateChanges = (e) => {
    e.preventDefault();

    this.props.addUser(this.state);
  };
  render() {
    return (
      <div className="AddUser">
        <form>
          <label htmlFor="name"></label>
          <input type="text" name="" id="user" onChange={this.handleChange} />
          <button onClick={this.updateChanges}>Update</button>
        </form>
      </div>
    );
  }
}
export default AddUser;
