import { Favorite, ThumbUp, MoreVert } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import "./post.css";
import userService from "../../services/userService";
import * as timeago from "timeago.js";
import { Link } from "react-router-dom";

const PF =process.env.REACT_APP_PUBLIC_FOLDER
export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      const data = await userService.getById(post.userId);
      setUser(data);
    };
    getUser();
  }, []);

  const handleLike = () => {
    //console.log('like clicked');
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postHead">
        <div className="postProfile">
          <Link to={`/profile/${user.username}`} className="postProfileLink">
            <img
              src={user.profilePicture || `${PF}/assets/no_avatar.png`}
              alt=""
              className="postProfilePhoto"
            />
            <span className="postProfileName">{user.username}</span>
            </Link>            
          <span className="postProfileTime">
            {timeago.format(user.createdAt)}
          </span>
        </div>

        <MoreVert className="postMenu" />
      </div>
      <div className="postBody">
        <div className="postBodyContent">{post.desc}</div>
        <img src={post.photo} alt="" className="postBodyImg" />
      </div>
      <div className="postBottom">
        <div className="postLikes">
          <ThumbUp className="postLikesButton" onClick={handleLike} />
          <Favorite className="postHeartButton" onClick={handleLike} />
          <div className="postLikesText">{like} people like it</div>
        </div>
        <div className="postComments">{post.comment} comments</div>
      </div>
    </div>
  );
}
