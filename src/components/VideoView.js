import video from "../data/video.js";

function VideoView({ likes, dislikes, handleLike, handleDislike }) {
  return (
    <div className="VideoView">
      <div>
        <iframe
          id="iframe"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allowFullScreen
          title="Thinking in React"
        />
      </div>
      <div>
        <p>
          <strong>{video.title}</strong>
        </p>
        <p>
          <strong>Views:</strong> {video.views} | <strong>Uploaded on </strong>
          {video.createdAt}
        </p>
        <button id="upvotes" onClick={handleLike}>
          {likes}🧡
        </button>
        <button id="downvotes" onClick={handleDislike}>
          {dislikes} 💔
        </button>
      </div>
    </div>
  );
}

export default VideoView;
