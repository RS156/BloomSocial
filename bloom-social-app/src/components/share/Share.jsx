import { EmojiEmotions, Label, LocationOn, PermMedia } from '@mui/icons-material'
import React from 'react'
import './share.css'

export default function Share() {
  return (
    <div className='shareContainer'>

        <div className="sharePost">
            <img src="/assets/person/1.jpg" alt="" className="profilePhoto" />
            <input placeholder="What's in your mind?" className="sharePostinput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
        <div className="linkList">
            <div className="linkListItem">
                <PermMedia className='linkIcon'/>
                <span className="linkText">Photo or Video</span>
            </div>
            <div className="linkListItem">
                <Label className='linkIcon'/>
                <span className="linkText">Tag</span>
            </div>
            <div className="linkListItem">
                <LocationOn className='linkIcon'/>
                <span className="linkText">Location</span>
            </div>
            <div className="linkListItem">
                <EmojiEmotions className='linkIcon'/>
                <span className="linkText">Feelings</span>
            </div>           
        </div>
        <button className="shareButton">Share</button>
        </div>      
    </div>
  )
}
