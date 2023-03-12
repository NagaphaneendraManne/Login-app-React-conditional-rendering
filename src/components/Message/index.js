// Write your code here
import './index.css'

const Message = props => {
  const {isUserLoggedIn} = props

  return (
    <h1 className="user-message">
      {isUserLoggedIn ? 'Welcome User' : 'Please Login'}
    </h1>
  )
}
export default Message
