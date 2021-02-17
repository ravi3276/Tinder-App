import React,{useState}from 'react'
import './MessageScreen.css';
import Avatar from '@material-ui/core/Avatar';

function MessageScreen() {
    const [input,setInput]=useState('');
    const [message,setMessage]=useState([
        {
            name:"ravi",
            message:"heyyyy how are you 🙂 ",
            image:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"

        },
        {
            name:"ravi",
            message:"are u at home",
            image:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"

        },
        {
            message:"hmm,am fine where r u "

        }
    ])

    const handleClick=(e)=>{
        e.preventDefault();
        setMessage([...message, {message:input}])
        setInput("")
    }

    return (
        <div className="messageScreen">
            <p>YOU MATCHED WITH RAVI ON 27/12/20</p>

            {
                message.map(msg=>(
                    msg.name ? (
                        <div className="message__chat">
                        <Avatar 
                        src={msg.image}
                        />
                        <p className="messageScreen__text">{msg.message}</p>
                        </div>
                    ):(
                        <div className="message__chat">
                        <p className="messageScreen__textUser">{msg.message}</p>
                        </div>
                    )
                   
                ))
            }
            <form className="send__msg">
                <input value={input} 
                onChange={(e)=>setInput(e.target.value)}
                className="send__input" placeholder="Type a message.." />
                <button onClick={handleClick} type="submit" className="send__btn">send</button>
            </form>
        </div>
    )
}

export default MessageScreen
