import React from "react";

const Comment = ({ comments }) => {
  return comments.map((cm, idx) => (
    <div className="flex flex-col" key={cm.id}>
      <div className="flex gap-3 items-center" key={cm.id}>
        <img
          className="h-10 rounded-full"
          src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_5.png"
          alt="img"
        />
        <div>
          <p className="font-bold text-xl">{cm?.username}</p>
          <p>{cm?.description}</p>
        </div>
      </div>
      {cm.replies && cm.replies.length > 0 && (
        <div className="ml-5 border-l">
          <Comment comments={cm?.replies} />
        </div>
      )}
    </div>
  ));
};

export default Comment;
