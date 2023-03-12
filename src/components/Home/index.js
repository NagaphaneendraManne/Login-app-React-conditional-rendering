// Write your code here
import {Component} from 'react'

import './index.css'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedIn: false}

  onLoginToggle = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="app-container">
        <div className="content-container">
          <Message isUserLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout onLogout={this.onLoginToggle} />
          ) : (
            <Login onLogin={this.onLoginToggle} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
