import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
    console.log(this.state)
  }

  render() {
    const { title, text } = this.state;

    return (
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Название</label>
            <input type="text" value={title} onChange={this.onChange} name="title" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="text">Пост</label>
            <input type="text" value={text} onChange={this.onChange} name="text" className="form-control" />
          </div>

          <button type="submit" className="btn btn-primary">Отправить</button>
        </form>
    )
  }
}

export default AddPost
