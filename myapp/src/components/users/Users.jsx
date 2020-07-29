import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
const Users = ({ users, lodding }) => {
    if (lodding) {
            return <Spinner/>
    }
    return (
            <div style={usersStyle}>
                {users.map(user => <UserItem key={user.id} user={user}/>)}
            </div>
        )
}
const usersStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}
Users.propTypes = {
    users: PropTypes.array.isRequired,
    lodding: PropTypes.bool.isRequired
}
export default Users;

