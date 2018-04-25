import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Sidebar from './Sidebar';
import logo from '../assets/logo.png'
import '../stylesheets/Header.css';

class Header extends Component {
  render() {
    const Link = this.props.link
    const handleSubmit = this.props.handleSubmit

    return (
      <header className="header">
        <div className="header-container">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <SearchForm handleSubmit={handleSubmit} />
          <Sidebar />
        </div>
      </header>
    );
  }
}

export default Header;