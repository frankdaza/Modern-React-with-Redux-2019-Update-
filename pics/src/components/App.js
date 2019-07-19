import React, { Component } from 'react'
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';


class App extends React.Component {

  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos/', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  }

  // onSearchSubmit(term) {
  //   axios.get('https://api.unsplash.com/search/photos/', {
  //     params: { query: term },
  //     headers: {
  //       Authorization: 'Client-ID 0da318d43b02cc0d6a9d338e48134863e2cd8937c9cec229b5d58686ea65275a'
  //     }
  //   }).then(response => {
  //     console.log(response.data.results);
  //   });
  // }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={ this.onSearchSubmit } />

        Found: { this.state.images.length } images.
      </div>
    );
  }
  
};

export default App;