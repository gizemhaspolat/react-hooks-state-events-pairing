import { useState } from "react";
import VideoView from "./VideoView.js";
import VideoComments from "./VideoComments.js";
import video from "../data/video.js";

function App() {
  const [likes, setLikes] = useState(video.upvotes);
  const [dislikes, setDislikes] = useState(video.downvotes);
  const [showComments, setShowComments] = useState(false);

  function handleLike() {
    setLikes(() => likes + 1);
  }
  function handleDislike() {
    setDislikes(() => dislikes + 1);
  }
  function handleHideComments() {
    setShowComments(() => !showComments);
  }

  return (
    <div className="App">
      <VideoView
        likes={likes}
        handleLike={handleLike}
        handleDislike={handleDislike}
        dislikes={dislikes}
      />
      <VideoComments
        showComments={showComments}
        handleHideComments={handleHideComments}
      />
    </div>
  );
}

export default App;
