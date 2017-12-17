import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  _handleClick() {
    console.log(this.state.count)
    this.setState({ count: ++this.state.count })
  }

  render() {
    return (
      <div>
        this is Home<br />
        当前数量：{this.state.count}<br />
        <button onClick={this._handleClick.bind(this)} >增加</button>
      </div>
    )
  }
}
