import React, { Component } from 'react';
import './App.css';
import CategoryList from './CategoryList';
import PostList from './PostList'

class App extends Component {
  render() {
    return (
      <div>
        <CategoryList/>
        <PostList/>
      </div>
    );
  }
}

export default App;
