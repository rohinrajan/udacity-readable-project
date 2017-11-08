import React, { Component } from 'react';
import { load_categories } from '../actions'
import { connect } from 'react-redux'
class CategoryList extends Component {

  componentDidMount(){
    console.log(this.props);
    this.props.load_categories()
  }

  render() {
      return(
        <p>this is a test</p>
      )
  }

}

function mapStateToProps(state){
  return { category: state.category }
}

export default connect(mapStateToProps)(CategoryList);
