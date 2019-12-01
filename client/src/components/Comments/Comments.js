import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Comment from '../Comment/Comment'

export class Comments extends Component {
  render() {
    const {comments} = this.props;

    if(comments.length === 0) {
        return (
            <p className="text-muted">Нет комментариев</p>
        )
    };

    return (
      <div>
        {comments.map(comment => (
            <Comment key={comment._id} comment={comment}/>
        ))}
      </div>
    )
  }
}

export default Comments
