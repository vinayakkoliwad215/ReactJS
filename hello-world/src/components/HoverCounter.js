import React, { Component } from 'react'
import withCounter from './withCounter'


class HoverCounter extends Component {
  render() {
    const { count,incrementCount} = this.props
    return <h2 onMouseOver={incrementCount}> Hoverd {count} times</h2>
   
  }
}

export default withCounter(HoverCounter,20)
