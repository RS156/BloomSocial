const Post = require("../models/Post");
const User = require("../models/User");
const Users = require("../dummyData").Users;
const Posts = require("../dummyData").Posts;
const bcrypt = require("bcrypt");

const router = require("express").Router();

router.post("/reset", async (req, res) => {
  await User.deleteMany({});
  await Post.deleteMany({});
  let user;
  let post;
  let userIds = []
  const passwordHash = await bcrypt.hash("Password1", 10);
  for (var i = 0; i < 10; i++) {
    user = new User({
      username: Users[i].username,
      email: Users[i].email,
      profilePicture: Users[i].profilePicture,
      coverPicture: Users[i].coverPicture,
      passwordHash,
      desc: "Hey there!",
      City: "New York",
      from: "Madrid",
      relationship: "Single",
    });
    await user.save();
userIds.push(user.id)
    post = new Post({
      userId: user.id,
      desc: Posts[i].desc ? Posts[i].desc : "",
      img: Posts[i].photo,
    });
    await post.save();
  }
  const AllUsers = await User.find({});
  
  AllUsers.forEach(async (u) => {
    userIds.forEach(uid => {
      if(uid !== u.id){
        u.followings.push(uid)
        u.followers.push(uid)
      }
    })
      await u.save();
    }) 
  res.status(200).send("successfully reset");
});

module.exports = router;
