import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/navbar';
import Users from './components/users/Users';

class App extends Component {
  state = {
    users: [],
    lodding: false
  }
  async componentDidMount() {
    this.setState({ lodding: true });
    const res = await axios.get(`https://api.github.com/users?access_token=${process.env.REACT_APP_ACCESS_TOKEN}&token_type=bearer`);
    this.setState({ users: res.data, lodding: false });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users users={this.state.users} lodding = {this.state.lodding} />
        </div>
      </div>
    );
  }
}

export default App;
