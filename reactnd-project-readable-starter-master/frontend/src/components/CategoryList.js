import React, { Component } from 'react';
import { load_categories } from '../actions'
import { connect } from 'react-redux'
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

class CategoryList extends Component {

  componentWillMount(){
    this.props.getCategories()
  }


  render() {
      const {categories} = this.props
      function handleSortBy(selectedKey){
        console.log("selected %s",selectedKey)
      }
      return(
        <Nav bsStyle="pills" activeKey={1}>
            <NavItem eventKey={1}>All</NavItem>
          {categories && categories.map((category)=> (
            <NavItem eventKey={category.path} key={category.path}>{category.name}</NavItem>
          ))}
            <NavDropdown title="Sort By" onSelect={handleSortBy} id="SortById">
              <MenuItem eventKey={'VoteScore'}>VoteScore</MenuItem>
              <MenuItem eventKey={'timestamp'}>TimeStamp</MenuItem>
            </NavDropdown>
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
