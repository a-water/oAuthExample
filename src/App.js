import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="App">
        <a href="https://github.com/login/oauth/authorize?client_id=<CLIENT_ID_HERE>&redirect_uri=http://localhost:3000/oauth/redirect">Click for Github</a>
      </div>
    );
  }
}

export default App;
