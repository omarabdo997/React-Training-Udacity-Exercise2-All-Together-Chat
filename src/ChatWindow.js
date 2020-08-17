import React, {Component} from 'react'

class ChatWindow extends Component {
  state = {
    mssg:''
  }
  handleMssg = (value) => {
    this.setState(currentState => ({
      mssg: value
    }))
  }
  isDisabled = () => {
    if(!this.state.mssg) {
      return 'true'
    }
  }
  addMssg = (event) => {
    event.preventDefault();
    let newMssg = {
      username: this.props.users[0].username,
      text: this.state.mssg
    }
    this.props.addMssg(newMssg);
    this.setState((currentState)=>({
      mssg:''
    }))
  }
  render() {
    return (
       <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.users[0].username}</div>

            <ul className="message-list">
              {this.props.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === this.props.users[0].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <div>
              <form className="input-group" onSubmit={this.addMssg}>
                <
				  input type="text" 
				  className="form-control" 
				  placeholder="Enter your message..." 
				  value={this.state.mssg} 
				  onChange={(event) => this.handleMssg(event.target.value)}
				/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
    )
  }
}
export default ChatWindow;