import React from 'react'
import './post.css'
import { MoreVert } from "@mui/icons-material";

const Post = () => {
  return (
    <div className="post">
    <div className="postWrapper">
      <div className="postTop">
        <div className="postTopLeft">
          <img
            className="postProfileImg"
            src="assets/Profile_pic.png"
            alt="profile picture"
          />
          <span className="postUsername">
            King Kunta
          </span>
          <span className="postDate">15 March 2023</span>
        </div>
        <div className="postTopRight">
          <MoreVert />
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">First Post made by dall-e</span>
        <img className="postImg" src="assets/Fotor_AI2.png" alt="" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img className="likeIcon" src="assets/like.png" alt="like button" />
          <img className="likeIcon" src="assets/heart.png" alt="herat button" />
          <span className="postLikeCounter">15 people like your post</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">53 comments</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Post