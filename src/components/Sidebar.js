import React, { Component } from 'react';
import UserIcon from '../assets/user.svg'
import '../stylesheets/Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Search was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-user">
          <img src={UserIcon} className="sidebar-user__icon" />
          <span className="sidebar-user__name">Jane Smith</span>
        </div>
      </div>
    );
  }
}

export default Sidebar;