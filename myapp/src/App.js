import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

class App extends Component {
  state = {
    users: [],
    lodding: false,
    alert: null
  }
  async componentDidMount() {
    this.setState({ lodding: true });
    const res = await axios.get(`https://api.github.com/users?access_token=${process.env.REACT_APP_ACCESS_TOKEN}&token_type=bearer`);
    this.setState({ users: res.data, lodding: false });
  }
  searchUsers = async text => {
    this.setState({ lodding: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&access_token=${process.env.REACT_APP_ACCESS_TOKEN}&token_type=bearer`);
    this.setState({
      lodding: false,
      users: res.data.items
    });
  }
  clearUsers = () => this.setState({ users: [] });
  setAlert = async (alert) => {
    await this.setState({
      alert: {
        msg: alert.msg,
        type: alert.type
      }
    });
    setTimeout(() => this.setState({ alert: null }), 5000);
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert}/>
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} hasUsers={this.state.users.length > 0 ? true : false} setAlert={this.setAlert}/>
          <Users users={this.state.users} lodding={this.state.lodding} />
        </div>
      </div>
    );
  }
}

export default App;
