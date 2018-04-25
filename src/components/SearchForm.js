import React, { Component } from 'react';
import '../stylesheets/SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.value)
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input className="search-form__input" type="text" value={this.props.value} onChange={this.handleChange} />
        <input className="search-form__submit" type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchForm;