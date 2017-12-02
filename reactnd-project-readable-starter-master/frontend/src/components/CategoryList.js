import React, { Component } from 'react';
import { load_categories } from '../actions'
import { connect } from 'react-redux'
import { Nav, NavItem } from 'react-bootstrap'

class CategoryList extends Component {

  componentWillMount(){
    this.props.getCategories()
  }

  render() {
      const {categories} = this.props
      return(
        <Nav bsStyle="pills" activeKey={1}>
            <NavItem eventKey={1}>All</NavItem>
          {categories && categories.map((category)=> (
            <NavItem eventKey={category.path}>{category.name}</NavItem>
          ))}
        </Nav>
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
