import {
  Cancel,
  EmojiEmotions,
  Label,
  LocationOn,
  PermMedia,
} from "@mui/icons-material";
import "./share.css";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import uploadService from "../../services/uploadService";
import postService from "../../services/postService";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;
export default function Share() {
  const { user } = useContext(AuthContext);
  const postText = useRef();
  const [file, setFile] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = postText.current.value;
    if (text || file) {
      const newPost = {
        userId: user.id,
      };
      if (file) {
        const res = await uploadService.uploadFile(file);
        newPost.img = res.filename;
      }
      if (text) {
        newPost.desc = text
      }
      await postService.sharePost(newPost)
      window.location.reload()
    }
    
  };
  return (
    <form className="shareContainer" onSubmit={handleSubmit}>
      <div className="sharePost">
        <img
          src={
            user.profilePicture
              ? `${PF}${user.profilePicture}`
              : `${PF}assets/no_avatar.png`
          }
          alt=""
          className="profilePhoto"
        />
        <input
          placeholder={`What's in your mind ${user.username}?`}
          className="sharePostinput"
          ref={postText}
        />
      </div>
      <hr className="shareHr" />
      {file && (
        <div className="shareImgContainer">
          <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
          <Cancel className="cancelIcon" onClick={ e => {
            setFile(null)
          }}/>
        </div>
      )}
      <div className="shareBottom">
        <div className="linkList">
          <label htmlFor="sharePostImg" className="linkListItem">
            <PermMedia className="linkIcon" />
            <span className="linkText">Photo or Video</span>
          </label>
          <input
            type="file"
            id="sharePostImg"
            style={{ display: "none" }}
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <label className="linkListItem">
            <Label className="linkIcon" />
            <span className="linkText">Tag</span>
          </label>
          <label className="linkListItem">
            <LocationOn className="linkIcon" />
            <span className="linkText">Location</span>
          </label>
          <label className="linkListItem">
            <EmojiEmotions className="linkIcon" />
            <span className="linkText">Feelings</span>
          </label>
        </div>
        <button className="shareButton" type="submit">
          Share
        </button>
      </div>
    </form>
  );
}
