import React from "react";
import Avatar from "react-avatar";

const ChatMessages = ({ name, messages }) => {
  return (
    <div className="flex items-center">
      <div>
        <Avatar
          src="https://yt3.ggpht.com/ytc/AIdro_mv-oSfekgn-DDfJs8RnkcMET-xG_JtH44GYqB22lXjH6aHO8Po6GgKNFS0ObSQcfl4aA=s88-c-k-c0x00ffffff-no-rj"
          size={25}
          round={true}
        />
      </div>
      <div className="ml-2 flex items-center">
        <h1 className="ml-2  text-sm  text-slate-600">{name}</h1>

        <p className="ml-2 text-sm">{messages}</p>
      </div>
    </div>
  );
};

export default ChatMessages;
