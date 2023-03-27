import React from 'react'
import Post from './Post'
import Share from './Share'
import './feed.css'
import {Posts} from '../../dummyData'

export default function Feed() {
  return (
    <div className='feedContainer'>
      <div className="feedWrapper">
        <Share />
        {Posts.map(p => (
          <Post key={p.id} post={p}/>
        ))}            
      </div>
    </div>
  )
}
