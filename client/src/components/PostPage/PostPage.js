import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPost, deletePost } from '../../store/actions/postActions'
import Spinner from '../Spinner/Spinner'


export class PostPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getPost(id);
  }

  deletePost = () => {
    const id = this.props.match.params.id;
    this.props.deletePost(id, this.props.history);
  }
  render() {
    const {post, user} = this.props;

    if(!post){
      return <Spinner />
    }

    return (
      <div>
        <h1>{post.title}</h1>
          <p className="text-muted">{post.author.name}</p>

          <p>{post.text}</p>

          {user && user.id === post.author._id ? (
            <div>
              <button onClick={this.deletePost} className="btn btn-danger" mr-5>Удалить</button>
              <button className="btn btn-light" ml-5>Редактировать</button>
            </div>
          ) : null }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user,
  post: state.postReducer.post
})

export default connect(mapStateToProps, {getPost, deletePost})(PostPage)
