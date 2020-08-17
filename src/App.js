import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow'

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/





class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state = {
    messages:[
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
	]
  }
  addMssg = (mssg) => {
    this.setState(currentState => ({
      messages: [...currentState.messages,mssg]
    }))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
    	  <ChatWindow users={[{ username: 'Amy' }]} messages={this.state.messages} addMssg={this.addMssg}/>
		  <ChatWindow users={[{ username: 'John' }]} messages={this.state.messages} addMssg={this.addMssg}/>
      	</div>
	 </div>
    );
  }
}

export default App;
