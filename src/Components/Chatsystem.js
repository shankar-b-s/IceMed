import React,{useState} from "react";

const Chatsystem = (props) => {
  const [messages, setMessages] = useState(props.msg);
  return ( 
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
  </div>
   );
}
 
export default Chatsystem;