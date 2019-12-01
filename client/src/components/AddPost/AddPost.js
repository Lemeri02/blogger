import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {addPost } from '../../store/actions/postActions'
import Helmet from 'react-helmet'

import withAuth from '../../hocs/withAuth'
export class AddPost extends Component {
  state = {
    title: "",
    text: ""
  }

  onChange = e => {
    this.setState({ [e.target.name] : e.target.value })
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.addPost(this.state, this.props.history);
  }

  render() {
    const { title, text, categories } = this.state;

    return (
        <form onSubmit={this.onSubmit}>
        <Helmet>
          <title>Blogger - Добавить пост</title>
        </Helmet>
          <div className="form-group">
            <label htmlFor="title">Название</label>
            <input type="text" value={title} onChange={this.onChange} name="title" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="text">Пост</label>
            <textarea type="text" value={text} onChange={this.onChange} name="text" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="text">Категория</label>
            <input type="text" value={categories} onChange={this.onChange} name="categories" className="form-control" />
          </div>

          <button type="submit" className="btn btn-outline-success">Отправить</button>
        </form>
    )
  }
}

export default  withAuth(connect(null, {addPost})(AddPost));
