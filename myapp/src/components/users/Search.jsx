import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class Search extends Component {
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        hasUsers: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    }
    state = {
        text: ''
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value });
    onSubmit = e => {
        e.preventDefault();
        if (this.state.text.trim() === "") {
            this.props.setAlert({ msg: "Please enter something", type: "danger" });
            this.setState({ text : "" });
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text : "" });
        }
    }
    render() {
        const { clearUsers, hasUsers } = this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {
                    hasUsers && <button className="btn btn-light btn-block" onClick={clearUsers} >Clear</button>
                }
            </div>
        )
    }
}

export default Search;

