const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

router.post('/register', async (req, res) => {
    const body = req.body
    if(body.password.length <3){
      return response.status(400).send('error : "password should be more than 3 characters')
    } 
    const passwordHash = await bcrypt.hash(body.password, 10) 
    const user = new User({
      username: body.username,
      email: body.email,
      passwordHash
    })
    
    const savedUser = await user.save()
    res.status(201).json(savedUser)
    })

    router.post('/login', async (req, res)=>{
      const {email, password} = req.body
      const user = await User.findOne({email})
      const isValid = user && (await bcrypt.compare(password, user.passwordHash))
      if(!isValid )
      {
        return res.status(401).send('{error: invalid username and password}')
      }
      res.status(200).json(user)

    })


module.exports = router