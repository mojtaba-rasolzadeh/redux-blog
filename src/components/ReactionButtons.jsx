import { useDispatch } from "react-redux";

import { reactionAdded } from "../reducers/blogSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};
const ReactionButtons = ({ blog }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        className="muted-button reaction-button"
        onClick={() =>
          dispatch(reactionAdded({ blogId: blog.id, reaction: name }))
        }
      >
         {blog.reactions[name]} {emoji}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
