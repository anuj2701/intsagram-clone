import React from 'react'
import './Posts.css'
import Avatar from '@material-ui/core/Avatar';
import icon from './comment.jpg'
function Posts({username, caption, imgUrl}) {
    return (
        <div className='post'>
        <div className ='post_header'>
        <Avatar
        className='post_avatar'
        alt='anujnagpure'
        src='https://wallpapercave.com/uwp/uwp412252.jpeg'
        />
        <h3>{username}</h3>
        </div>
        {/* {header->avatar->username} */}
        <img className='post_image' src={imgUrl}/>
        {/* {postimage} */}
        <h4 className='post_text'><strong>{username}</strong> {caption} </h4>
        <button className='comment_image'><img  className='comment_img' src={icon}/></button>

            
        </div>
    )
}

export default Posts
