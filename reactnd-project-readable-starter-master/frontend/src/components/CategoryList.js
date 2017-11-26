import React, { Component } from 'react';
import { load_categories } from '../actions'
import { connect } from 'react-redux'
class CategoryList extends Component {


  render() {
     console.log(this.props);
      return(
        <p> This is a sample test</p>
      )
  }



}
function mapStateToProps(state){
  return { category: state.category }
}

function mapDispatchToProps(dispatch){
  return {
    getCategories: load_categories()
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList);
