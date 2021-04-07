import React, { Component } from 'react';

import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
  state = {
    gifList: []
  };

  componentDidMount() {
  }

  handleSubmit = search => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&rating=g&api_key=If9FDBersN0GkXPqVaI4I8tz8qzpUIMB`)
      .then(response => response.json())
      .then(({ data }) => {
        this.setState({
          gifList: data.slice(0, 3)
        })
      });
  }

  render() {
    return(
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList listOfGifs={this.state.gifList} />
      </div>
    );
  }
}