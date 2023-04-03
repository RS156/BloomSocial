import React from 'react'
import Post from './Post'
import Share from './Share'
import './feed.css'
//import {Posts} from '../../dummyData'
import postService from '../../services/postService'
import { useState, useEffect } from 'react'
const hardCodedUser = {"id": "6428eee42f93eb4cbaecd578"}

export default function Feed({username}) {
  const [posts, setPosts] =useState([])
  useEffect(()=>{
    const getAllPosts = async ()=>{
      const data = username
      ? await postService.getProfilePosts(username)
      :await postService.getTimelinePosts(hardCodedUser)      
      setPosts(data)
    }
    getAllPosts()   
  },[])

  console.log(posts);

  return (
    <div className='feedContainer'>
      <div className="feedWrapper">
        <Share />
        {posts.map(p => (
          <Post key={p.id} post={p}/>
        ))}            
      </div>
    </div>
  )
}
