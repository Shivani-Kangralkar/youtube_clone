import React, { useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { addMessage } from "../../redux-store/ChatSlice";

const ChatSendMessages = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const sendMessage = (e) => {
    e.preventDefault()
    dispatch(addMessage({name:'shivani', messages:input}));
    setInput("");
  };

  return (
    <div className="border border-slate-200 rounded-b-xl flex items-center justify-between border-t p-2">
      <div className="flex items-center w-[90%]">
        <div>
          <Avatar
            src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
            size={35}
            round={true}
          />
        </div>
        <form onSubmit={(e) => sendMessage(e)}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border-b border-gray-300 outline-none ml-2 mb-2"
            type="text"
            placeholder="Send message..."
            name='send'
          />
        </form>

        <div className="bg-gray-200 cursor-pointer p-2 rounded-full ml-28">
          <LuSendHorizonal onClick={sendMessage}/>
        </div>
      </div>
    </div>
  );
};

export default ChatSendMessages;
