import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {
    let message
    if(this.state.isLoggedIn)
    {
        message = <div>Welcome Vinayak</div>
    }
    else{
        message = <div>Welcome Guest</div>
    }

    return <div>{message}</div>
    // if(this.state.isLoggedIn) {
    //     return <div>Welcome Vinayak</div>
    // } else {
    //     return <div>Welcome Guest</div>
    // }
  }
}

export default UserGreeting
