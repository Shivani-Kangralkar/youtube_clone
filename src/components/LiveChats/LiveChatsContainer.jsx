import React from "react";
import LiveChats from "./LiveChats";
import ChatSendMessages from "./ChatSendMessages";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const LiveChatsContainer = () => {
  return (
      <div className="w-96 ml-8 ">
        <div className="px-2 border border-slate-200  rounded-t-xl py-2  flex justify-between items-center">
          <div className="flex">
            <h1>Top Chat</h1>
            <RiArrowDropDownLine size={30} />
          </div>

          <div className="flex">
            <BsThreeDotsVertical size={18} className="mr-4" />
            <RxCross1 size={20} />
          </div>
        </div>
        <div className="overflow-y-auto flex flex-col-reverse px-2  h-[400px] border border-slate-200">
            <LiveChats />
        </div>

        <ChatSendMessages />
      </div>
  );
};

export default LiveChatsContainer;
