import React from "react";
import Avatar from "react-avatar";

const Comment = ({ data }) => {
  console.log(data);
  const { name, text, replies } = data;



  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <Avatar name="Wim Mostmans" round={true} size={35} />
      <div className="px-3">
        <p className=" font-semibold">{name}</p>
        <p className="">{text}</p>

      </div>


    </div>
  );
};

export default Comment;
