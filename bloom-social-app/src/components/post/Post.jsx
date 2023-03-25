import { Favorite, ThumbUp, MoreVert } from "@mui/icons-material";
import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postHead">
        <div className="postProfile">
          <img src="/assets/person/1.jpg" alt="" className="postProfilePhoto" />
          <span className="postProfileName">Rishabh Sarkar</span>
          <span className="postProfileTime">5 mins ago</span>
        </div>
        <MoreVert className="postMenu" />
      </div>
      <div className="postBody">
        <div className="postBodyContent">Hey! It's my first post :)</div>
        <img src="/assets/post/5.jpg" alt="" className="postBodyImg" />
      </div>
      <div className="postBottom">
        <div className="postLikes">
          <ThumbUp className="postLikesButton" />
          <Favorite className="postHeartButton" />
          <div className="postLikesText">32 people like it</div>
        </div>
        <div className="postComments">9 comments</div>
      </div>
    </div>
  );
}
