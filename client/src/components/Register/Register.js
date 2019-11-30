import React, { Component } from 'react'
import { connect } from 'react-redux'

import { registerUser } from '../../store/actions/authActions'
import { clearErrors } from '../../store/actions/errorActions'

export class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: ""
  };

  componentDidUpdate() {
    if (this.props.user){
      this.props.history.push("/")
    }
  }

  componentDidMount() {
    this.props.clearErrors();

    if (this.props.user){
      this.props.history.push("/")
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.registerUser(this.state);
    console.log(this.state)
  }
  render() {
    const { errors } = this.props;
    const { name, email, password, password2 } = this.state;

    return (
      <div className="row">
        <form className="card p-3 mx-auto col-md-5" onSubmit={this.onSubmit}>
          <h2 className="text-center">Регистрация</h2>
         
          <div className="form-group">
            <label htmlFor="name">Имя:</label>
            <input type="text" className="form-control" value={name} onChange={this.onChange} name="name" />
            {errors.name && (<div className="text-danger">{errors.name}</div>)}
          </div>

         <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" value={email} onChange={this.onChange} name="email" />
            {errors.email && (<div className="text-danger">{errors.email}</div>)}
          </div>

          <div className="form-group">
            <label htmlFor="password">Пароль:</label>
            <input type="password" className="form-control" value={password} onChange={this.onChange} name="password" />
            {errors.password && (<div className="text-danger">{errors.password}</div>)}
          </div>

          <div className="form-group">
            <label htmlFor="password2">Повторите пароль:</label>
            <input type="password" className="form-control" value={password2} onChange={this.onChange} name="password2" />
            {errors.password2 && (<div className="text-danger">{errors.password2}</div>)}
          </div>

          <button type="submit" className="btn btn-primary btn-lg">Зарегистрироваться</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user,
  errors: state.errorReducer
});

export default connect(
  mapStateToProps,
  { registerUser, clearErrors }
)(Register);
