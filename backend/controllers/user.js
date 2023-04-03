const router = require('express').Router()
const User = require('../models/User')


//get user
router.get('/', async (req, res) => {
  const username = req.query.username
  const id = req.query.id 
  const user = username
  ? await User.findOne({username})
  : id
  ? await User.findById(id)
  : await User.find({})
  res.status(200).json(user)
})
//update a specific user
router.put('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  if(req.params.id !== req.body.userId || !user.isAdmin)
  {
    return res.status(401).send('error : "User unauthorized to update"')
  }
  if(!user){
    return res.status(404).send('error : "User not found"')
  }
  const {userId, ...otherUpdate} = req.body
  const updatedUser = await User.findByIdAndUpdate(userId, {$set: otherUpdate}, {runValidators:true, returnOriginal: false})
  res.status(200).json(updatedUser)
})

//delete a user
router.delete('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  if(req.params.id !== req.body.userId || user.isAdmin)
  {
    return res.status(401).send('error : "User unauthorized to delete"')
  } 
  await User.findByIdAndDelete(req.params.id)
  res.status(204).end()
})

//follow a user
router.put('/:id/follow', async (req, res) => {  
  if(req.params.id === req.body.userId)
  {
    return res.status(401).send('error : "User unauthorized to follow his own user"')
  }
  const requestedUser = await User.findById(req.params.id)    
  const currentUser = await User.findById( req.body.userId)

  if(!(requestedUser&& currentUser))
  {
    return res.status(404).send('error : "User not found"')
  }

  if (!requestedUser.followers.includes(currentUser.id)) {
    requestedUser.followers.push(currentUser.id)
  }
  if (!currentUser.followings.includes(requestedUser.id)) {
    currentUser.followings.push(requestedUser.id)
  }
  await requestedUser.save()
  await currentUser.save()
  res.status(200).json(currentUser)
})

//unfollow a user
router.put('/:id/unfollow', async (req, res) => {  
  if(req.params.id === req.body.userId)
  {
    return res.status(401).send('error : "User unauthorized to unfollow his own user"')
  }
  const requestedUser = await User.findById(req.params.id)    
  const currentUser = await User.findById( req.body.userId)

  if(!(requestedUser&& currentUser))
  {
    return res.status(404).send('error : "User not found"')
  }
  
  requestedUser.followers.pull(currentUser.id)
  currentUser.followings.pull(requestedUser.id)
  await requestedUser.save()
  await currentUser.save()
  res.status(200).json(currentUser)
})


  module.exports = router