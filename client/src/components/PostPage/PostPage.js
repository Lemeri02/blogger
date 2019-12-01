import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import { getPost, deletePost } from '../../store/actions/postActions'
import Spinner from '../Spinner/Spinner'
import AddComment from '../AddComment/AddComment';
import Comments from '../Comments/Comments';
import Helmet from 'react-helmet'

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
        <Helmet>
          <title>Blogger - {post.title}</title>
        </Helmet>
        
        <h1>{post.title}</h1>
          <p className="text-muted"> Автор: {post.author.name}</p>

          <p>{post.text}</p>

          <p className="text-muted">Категория: {post.categories}</p>

          {user && user.id === post.author._id ? (
            <div className="mb-5">
              <button onClick={this.deletePost} className="btn btn-outline-danger mr-3" >Удалить</button>
              <Link className="btn btn-outline-secondary ml-3" to={`/edit/${post._id}`} >Редактировать</Link>
            </div>
          ) : null }

          <AddComment />
          <Comments comments={post.comments}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user,
  post: state.postReducer.post
})

export default connect(mapStateToProps, {getPost, deletePost})(PostPage)
