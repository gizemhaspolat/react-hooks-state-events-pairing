import video from "../data/video.js";

function VideoComments({ showComments, handleHideComments }) {
  return (
    <div className="VideoComments">
      <button id="hide-comments" onClick={handleHideComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>

      <div className="commentsShown">
        {showComments && (
          <div>
            <p>
              {video.comments.map((comment) => (
                <div key={comment.id}>
                  <p>
                    <strong>{comment.user}</strong> : {comment.comment}
                  </p>
                </div>
              ))}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoComments;
