import React, { Component } from 'react';
import { load_posts } from '../actions'
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap'

class PostList extends Component {

  componentWillMount(){
    this.props.getAllPosts()
  }

  render() {
      const {posts} = this.props
      return(
        <div>
          {posts && posts.map((post) => (
            <Panel key={post.id}>{post.title}</Panel>
          ))}
        </div>
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
