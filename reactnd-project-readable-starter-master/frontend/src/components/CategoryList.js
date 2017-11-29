import React, { Component } from 'react';
import { load_categories } from '../actions'
import { connect } from 'react-redux'


class CategoryList extends Component {

  componentWillMount(){
    this.props.getCategories()
  }

  render() {
      const {category} = this.props
      return(
        <div>
          {category && category.map((cat)=> (
            <p key={cat.path}> {cat.name } </p>
          ))}
        </div>
      )
  }



}
function mapStateToProps(state){
  return { category: state.category }
}

function mapDispatchToProps(dispatch){
  return {
    getCategories: () => dispatch(load_categories())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList);
