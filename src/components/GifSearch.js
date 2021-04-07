import React, { Component } from 'react';

export default class GifSearch extends Component {
  state = {
    search: ''
  };

  componentDidMount() {
  }

  handleInputChange = ({ target }) => {
    this.setState({
      search: target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.search);
    this.setState({
      search: ''
    });    
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input id='search' onChange={this.handleInputChange} value={this.state.search} />
        <button type='submit'>Search</button> 
      </form>
    );
  }
}