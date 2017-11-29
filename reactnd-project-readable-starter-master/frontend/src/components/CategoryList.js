import React, { Component } from 'react';
import { load_categories } from '../actions'
import { connect } from 'react-redux'


class CategoryList extends Component {

  componentWillMount(){
    this.props.getCategories()
  }

  render() {
      const {categories} = this.props
      return(
        <ul>
          {categories && categories.map((category)=> (
            <li key={category.path}> {category.name } </li>
          ))}
        </ul>
      )
  }



}
function mapStateToProps(state){
  return { categories: state.categories }
}

function mapDispatchToProps(dispatch){
  return {
    getCategories: () => dispatch(load_categories())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList);
