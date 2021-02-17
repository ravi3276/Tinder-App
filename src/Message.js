import React from 'react'
import './Message.css'
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';

function Message({name, message,timestamp,profilePic}) {
    return (
        <Link to={`/chat/${name}/`}>
        <div className="message">
        <Avatar className="message__image" alt={name} src={profilePic} />

            <div className="message__info">
            <h2>
            {name}
            </h2>
            <p>{message}</p>
            </div>
            <p>{timestamp}</p>
            </div>
        </Link>

    )
}

export default Message
