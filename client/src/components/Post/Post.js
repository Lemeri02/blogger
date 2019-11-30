import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 

export class Post extends Component {
  shortText = text => text.substr(0, 100) + "..."

  render() {
    const { post } = this.props;

    return (
      <div className="card mb-3">
        <div className="card-body">
          <h1>{post.title}</h1>
          <p>{this.shortText(post.text)}</p>
          <Link to={`/post/${post._id}`} className="btn btn-primary">Подробнее</Link>
        </div>
      </div>
    )
  }
}

export default Post
