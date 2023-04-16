import React, { useContext } from 'react'
import Post from './Post'
import Share from './Share'
import './feed.css'
//import {Posts} from '../../dummyData'
import postService from '../../services/postService'
import { useState, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

export default function Feed({username, profile}) {
  const [posts, setPosts] =useState([])
  const {user} = useContext(AuthContext)
  useEffect(()=>{
    const getAllPosts = async ()=>{
      const data = username
      ? await postService.getProfilePosts(username)
      :await postService.getTimelinePosts(user)      
      setPosts(data.sort((p1,p2)=>{
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }))
    }
    getAllPosts()   
  },[username])


  return (
    <div className='feedContainer'>
      <div className="feedWrapper">
        {!profile && <Share />}        
        {posts.map(p => (
          <Post key={p.id} post={p}/>
        ))}            
      </div>
    </div>
  )
}
