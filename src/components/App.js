import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import axios from 'axios';
/* import {withRouter} from '../withRouter'; */

import '../index.css';

import Nav from './Nav';
import Gallery from './Gallery';
import SearchForm from './SearchForm';
import SearchLink from './SearchLink';
import Header from './Header';

import apiKey from '../config';


class App extends PureComponent {

  state = {
    photos: [], 
    query: "",
    loading: true,
    search: false
  }
  

  handleSearch = (query) => {
    this.setState({
      loading: true
    });
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  updateQuery = (query) => {
    this.setState({
      query
    })
  }

  showSearchBar = () => {
    this.setState({
      search: true
    })
  }

  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Header 
          query={this.state.query}
          search={this.state.search}
          showSearchBar={this.showSearchBar}
          updateQuery={this.updateQuery}
          handleSearch={this.handleSearch}
        />
        
        <Nav />
        <Routes>
          <Route path="/cats" element={<Gallery 
              photos={this.state.photos}
              query="cat"
              handleSearch={this.handleSearch}
              updateQuery={this.updateQuery}
              loading={this.state.loading}
            />} />
            <Route path="/dogs" element={<Gallery 
              photos={this.state.photos}
              query="dog"
              handleSearch={this.handleSearch}
              updateQuery={this.updateQuery}
              loading={this.state.loading}
            />} />
            <Route path="/computers" element={<Gallery 
              photos={this.state.photos}
              query="computers"
              handleSearch={this.handleSearch}
              updateQuery={this.updateQuery}
              loading={this.state.loading}
            />} />
            <Route path="/" element={<Navigate to="/cats" />} />
            <Route path="/search/:query" element={<Gallery 
              photos={this.state.photos}
              handleSearch={this.handleSearch}
              updateQuery={this.updateQuery}
              loading={this.state.loading}
            />} />
            <Route path="*" element={<h1 className="error">Error: page not found!</h1>} />
        </Routes>
      
        </div>
      </BrowserRouter>
      
     
    );
  }
  
}

export default App;
