import React from 'react'
import Avatar from 'react-avatar';

 const Client = ({username}) => {
  return (
    <div>
    <Avatar name={username} size="40" round="20px"   />
    <span className='m-2'>{username}</span>

    </div>
  )
}
export default Client;
