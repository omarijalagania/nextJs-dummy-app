import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

function Comments(props) {
  const { eventId } = props;
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  //notifications

  const addComment = () => toast.success("Comment Added");
  async function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
    if (!showComments) {
      const response = await fetch(`/api/comments/${eventId}`);
      const data = await response.json();
      setComments(data.comments);
    }
  }

  function addCommentHandler(commentData) {
    // send data to API
    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    addComment();
  }

  if (!comments) {
    return <p>Loading...</p>;
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && (
        <NewComment Toaster={Toaster} onAddComment={addCommentHandler} />
      )}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
