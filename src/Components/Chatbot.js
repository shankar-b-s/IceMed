import Sidebar from "./Sidebar";
import useri from "../Images/useri.png";
import box1 from "../Images/box1.png";
import box2 from "../Images/box2.png";
import box3  from "../Images/box3.png";
import send from "../Images/send.png";
import upload from "../Images/upload.png";
import { useState } from "react";
import Chatsystem from "./Chatsystem";

  const Chatbot = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const handleInputFocus = () => {
      setIsInputFocused(true);
    };

  const [messages, setMessages] = useState([]);
  const [startmessage,setStartimessage] = useState([{text:'Hello',sender:'bot'}])

  const handleMessageSubmit = (message) => {
    const newMessages = [...messages, { text: message, sender: 'user' }];
    setMessages(newMessages);
    const botResponse = 'Bot response...';
    const botMessage = { text: botResponse, sender: 'bot' };
    setMessages([...newMessages, botMessage]);
  };
  

    return (  
      <div className="chatbot text-black flex bg-gradient-to-br from-[#AFCC9C] to-[#566A49]">
        <div>
          <div><Sidebar/></div>
        </div>
        <div className="flex flex-col">
          <div className="flex w-max h-[20%] items-center justify-end">
            <a href="/"><div className="text-lg px-4">HOME</div></a>
            <div className="size-10"><img src={useri} alt="img" /></div>
          </div>
          <div className="text-4xl font-semibold">Hello,<br />How can I help you today?</div>
          {!isInputFocused &&
          <div className="flex mt-20">
            <div className="bg-[#84aa6d] w-60 h-60 rounded-2xl mx-12">
              <div className="p-7 text-xl">Compare your diagnosis with AI-backed analysis</div>
              <div className="flex justify-end p-12"><img src={box1} alt="img" /></div>
            </div>
            <div className="bg-[#84aa6d] w-60 h-60 rounded-2xl mx-12">
              <div className="p-7 text-xl">Summarise a medical report or a research paper</div>
              <div className="flex justify-end p-12"><img src={box2} alt="img" /></div>
            </div>
            <div className="bg-[#84aa6d] w-60 h-60 rounded-2xl mx-12">
              <div className="p-7 text-xl">Ask for pharmaceutical suggestions</div>
              <div className="flex justify-end p-12 "><img src={box3} alt="img" /></div>
            </div>
          </div>}
          {isInputFocused && <Chatsystem msg={startmessage}/>}
          <Chatsystem msg={messages}/>
          <div className="inputfield absolute flex top-[73%] w-[70%] bg-black items-center justify-between rounded-2xl mt-24 p-5">
            <div className="flex justify-start">
              <div>
              <input type="file" id="file-input" className="hidden" />
              <label htmlFor="file-input" className="cursor-pointer flex items-center justify-center ">
                <img src={upload} alt="Upload Icon" className="size-6 mt-1 mr-2" />
              </label>
              </div>
              <div><input type="text" onFocus={handleInputFocus} className="bg-inherit focus:outline-0 text-white text-xl mx-4 w-[340%]" placeholder="Enter your diagnosis, or any medical prompts" /></div>
            </div>
            <div><button onClick={handleMessageSubmit}><img src={send} alt="img" className="px-5" /></button></div>
          </div>
        </div>
      </div>
      );
  }
   
  export default Chatbot;