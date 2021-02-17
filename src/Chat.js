import React from 'react'
import './Chat.css'
import Message from './Message'
function Chat() {
    return (
        <div className="chat">
           <Message
           name="ravi"
           message="heyyyy how are you 🙂 "
           timestamp="30 minutes ago"
           profilePic="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
           />

           <Message
           name="sai"
           message="its getting late ⌚ ⌚ "
           timestamp="3 minutes ago"
           profilePic="https://i.pinimg.com/564x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg"
           />

           <Message
           name="teja"
           message="heyyy where are you?"
           timestamp="10 minutes ago"
           profilePic="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/938c594f-553d-41f4-a849-e0ac61bb7b94/daj51fg-bddd3317-070e-4bd1-bbe8-81b04285d1d7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOTM4YzU5NGYtNTUzZC00MWY0LWE4NDktZTBhYzYxYmI3Yjk0XC9kYWo1MWZnLWJkZGQzMzE3LTA3MGUtNGJkMS1iYmU4LTgxYjA0Mjg1ZDFkNy5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.8v2UkNDfWa-m3bHQla1_HoPJI3ga6DXm5wNSBnTw6Ow"
           />

           <Message
           name="ramz"
           message="heyyy...."
           timestamp="15 minutes ago"
           profilePic="https://images.unsplash.com/photo-1500239524810-5a6e76344a17?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
           />
        </div>
    )
}

export default Chat
