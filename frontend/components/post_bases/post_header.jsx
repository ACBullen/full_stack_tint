import React from 'react';

const PostHeader = ({user}) => {
  return(
    <header id="PostHeader">
      <img width="20px" height="20px" src={`${user.profile_pic}`}/>
      {user.username}
    </header>
  )
}

export default PostHeader;