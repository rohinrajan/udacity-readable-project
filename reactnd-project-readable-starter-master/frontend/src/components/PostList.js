import React, { Component } from 'react';
import { load_posts } from '../actions'
import { connect } from 'react-redux'
import { Panel,Grid,Row,Col, Badge } from 'react-bootstrap'

class PostList extends Component {

  componentWillMount(){
    this.props.getAllPosts()
  }

  render() {
      const {posts} = this.props
      return(
          <Grid>
            {posts && posts.map((post) => (
              <Row className="show-grid" key={post.id}>
                <Col md={2}>VoteScore:<Badge>{post.voteScore}</Badge></Col>
                <Col md={8}><Panel key={post.id} header={post.title}>{post.body}</Panel>
                </Col>
              </Row>
            ))}
          </Grid>
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
