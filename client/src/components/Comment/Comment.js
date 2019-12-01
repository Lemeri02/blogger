import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import {deleteComment} from '../../store/actions/postActions'

export class Comment extends Component {
    deleteComment = () => {
      const id = this.props.comment._id;
      this.props.deleteComment(id);
    };

  render() {
    const {comment, user } = this.props;


    return (
      <div className="card mb-3">
         <div className="card-body">
           <h4>{comment.author.name}</h4>
           <p>{comment.text}</p>
            {user && user.id === comment.author._id && (
                <button className="btn btn-outline-danger" onClick={this.deleteComment}>Удалить комментарий</button>
            )}
         </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    user: state.authReducer.user
})

export default connect(mapStateToProps, {deleteComment})(Comment)
