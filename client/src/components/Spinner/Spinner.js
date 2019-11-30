import React, { Component } from 'react'
import spinner from './spinner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={spinner} alt="Loading..." style={{
          display: "block",
          margin: "auto",
          width: "200px"
        }}/>
      </div>
    )
  }
}

export default Spinner
