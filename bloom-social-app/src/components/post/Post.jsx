import { Favorite, ThumbUp, MoreVert } from "@mui/icons-material";
import React from "react";
import "./post.css";
import {Users} from '../../dummyData'

export default function Post({post}) {
  const user = Users.find( u => u.id === post.userId)
  return (
    <div className="post">
      <div className="postHead">
        <div className="postProfile">
          <img src={user.profilePicture} alt="" className="postProfilePhoto" />
          <span className="postProfileName">{user.username}</span>
          <span className="postProfileTime">{post.date}</span>
        </div>
        <MoreVert className="postMenu" />
      </div>
      <div className="postBody">
        <div className="postBodyContent">{post.desc}</div>
        <img src={post.photo} alt="" className="postBodyImg" />
      </div>
      <div className="postBottom">
        <div className="postLikes">
          <ThumbUp className="postLikesButton" />
          <Favorite className="postHeartButton" />
          <div className="postLikesText">{post.like} people like it</div>
        </div>
        <div className="postComments">{post.comment} comments</div>
      </div>
    </div>
  );
}
