import React, { Component } from 'react';
import { load_posts } from '../actions'
import { connect } from 'react-redux'


class PostList extends Component {

  componentWillMount(){
    this.props.getAllPosts()
  }

  render() {
      const {posts} = this.props
      return(
        <ul>
          {posts && posts.map((post)=> (
            <li key={post.id}> {post.title } </li>
          ))}
        </ul>
      )
  }
}

function mapStateToProps(state){
  return { posts: state.posts }
}

function mapDispatchToProps(dispatch){
  return {
    getAllPosts: () => dispatch(load_posts())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostList);
