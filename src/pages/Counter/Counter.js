import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    return (
      <div>
        <div>当前数量为：</div>
        <button onClick={this._handleClick.bind(this)}>增加</button>
        <button onClick={this._handleClick.bind(this)}>减少</button>
        <button onClick={this._handleClick.bind(this)}>重置</button>
      </div>
    )
  }

  _handleClick(e) {
    console.log(e)
  }
}
