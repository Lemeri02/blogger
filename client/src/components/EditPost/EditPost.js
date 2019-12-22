import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { editPost, getPost } from '../../store/actions/postActions'
import Spinner from '../Spinner/Spinner'
import withAuth from '../../hocs/withAuth'
import Helmet from 'react-helmet'

export class AddPost extends Component {
  constructor(props) {
      super(props);

      this.titleInput = React.createRef();
      this.textInput = React.createRef();
      this.categoriesInput = React.createRef();
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    this.props.getPost(id);
  }
 
  onSubmit = e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.editPost(id, {
        title: this.titleInput.current.value,
        text: this.textInput.current.value,
        categories: this.categoriesInput.current.value,
    }, this.props.history);
  }

  render() {
    const { post } = this.props;

    if(!post) {
        return <Spinner />
    }

    return (
        <form onSubmit={this.onSubmit}>
        <Helmet>
          <title>Blogger - Редактировать пост</title>
        </Helmet>
          <div className="form-group">
            <label htmlFor="title">Название</label>
            <input 
            ref={this.titleInput}
            type="text" defaultValue={post.title}  className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="text">Пост</label>
            <textarea 
            ref={this.textInput}
            type="text" defaultValue={post.text} className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="text">Категория</label>
            <input 
            ref={this.categoriesInput}
            type="text" defaultValue={post.categories} className="form-control" />
          </div>

          <button type="submit" className="btn btn-outline-success">Редактировать</button>
        </form>
    )
  }
}

const mapStateToProps = state => ({
    post: state.postReducer.post
})

export default  withAuth(connect(mapStateToProps, {editPost, getPost})(AddPost));
