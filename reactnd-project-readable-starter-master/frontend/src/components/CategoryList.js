import React, { Component } from 'react';
import { load_categories } from '../actions'
import { connect } from 'react-redux'
class CategoryList extends Component {

 componentWillMount(){
   this.props.getCategories()
 }


  render() {
    console.log(this.props.category)
      return(
        <p> This is a sample test</p>
      )
  }



}
function mapStateToProps(state){
  return { category: state.categories }
}

function mapDispatchToProps(dispatch){
  return {
    getCategories: () => dispatch(load_categories())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList);
