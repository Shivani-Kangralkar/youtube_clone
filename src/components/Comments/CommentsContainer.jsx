import React from "react";
import Comment from "./Comment";
import { commentsData } from "../../constants/info";

const CommentsList = ({ comments}) => {
  return comments.map(
    (comment) => 

    <div key={comment.id}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="mt-6 mb-8">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
