// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribed: false}

  onClickBtnText = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const btnText = this.getButtonText()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="message">Thank You! Happy Learning</p>
        <button className="button" type="button" onClick={this.onClickBtnText}>
          {btnText}
        </button>
      </div>
    )
  }
}

export default Welcome
