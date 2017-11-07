import React, { Component } from 'react';
import { load_categories } from '../actions'
class CategoryList extends Component {

  componentDidMount(){
    console.log(this.props);
    load_categories()
  }

  render() {
      const category = this.props
      console.log(category)
      return(
        <p>this is a test</p>
      )
  }

}

export default CategoryList
