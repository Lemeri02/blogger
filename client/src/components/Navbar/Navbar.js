import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from './logo1.png'

export class Navbar extends Component {
  render() {
    const { user } = this.props;

    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light mb-3">
        <div className="container">
          <Link to="/" className="navbar-brand mb-0"> <img src={logo} alt="logo" style={{
          display: "block",
          margin: "auto",
          width: "200px"
        }}/></Link>
       

          <button 
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/add" className="nav-link ">Добавить пост</Link>
              </li>
            </ul>

            {user ? (
              <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  {user.name}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/logout" className="nav-link">Выход</Link>
              </li>
            </ul>
            ) : (
              <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/login" className="nav-link">Вход</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">Регистрация</Link>
              </li>
            </ul>
            )}
            
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user
});

export default connect(mapStateToProps)(Navbar);
