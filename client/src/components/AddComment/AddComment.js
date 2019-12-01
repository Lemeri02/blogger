import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {addComment} from '../../store/actions/postActions'
import {withRouter} from 'react-router-dom'

export class AddComment extends Component {

    state ={
        text: '',
    }

    onChange = e => {
        this.setState({ [e.target.name] : e.target.value })
    }
    
    onSubmit = e => {
        e.preventDefault();
        const id = this.props.match.params.id;
        this.props.addComment(id, this.state);
        this.setState({text: ''});
    }

  render() {
      const { user } = this.props;
      const { text } = this.state;

      if (!user) {
          return ( 
          <div>
              <p className="text-muted">Комментировать могут только авторизованные пользователи</p>
              <p  className="text-muted"><Link to="/login">Войти</Link> или <Link to="/register">Зарегистрироваться</Link></p>    
          </div>)
      }
    return (
        <form className="mb-3" onSubmit={this.onSubmit}>
      <div className="form-group">
          <label htmlFor="text">Комментарий:</label>
          <textarea type="text" value={text} onChange={this.onChange} name="text" className="form-control" />
      </div>
          <button type="submit" className="btn btn-outline-success">Отправить коммент</button>
          </form>
    )
  }
}

const mapStateToProps = state => ({
    user: state.authReducer.user
})

export default withRouter(connect(mapStateToProps, {addComment})(AddComment));