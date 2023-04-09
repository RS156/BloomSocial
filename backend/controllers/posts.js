const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//get all posts
router.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.status(200).json(posts);
});

//create a post
router.post("/", async (req, res) => {
  const { userId, desc, img } = req.body;
  const user = await User.findById(userId)
  if (!user) {
    return res.status(401).json({ error: "user not found" });
  }
  if (!(desc || img)) {
    return res.status(403).json({ error: "post content not present" });
  }
  //throw new Error('test')
  const post = new Post({ userId, desc, img });
  await post.save();
  res.status(201).json(post);
});

//update a apost
router.put("/:id", async (req, res) => {
  const updatedPost = await Post.findOneAndUpdate(
    { _id: req.params.id, userId: req.body.userId },
    { $set: { desc: req.body.desc, img: req.body.img } },
    { new: true }
  );
  if (!updatedPost) {
    return res
      .status(403)
      .json({ error: "User cannot update someone else's post" });
  }
  res.status(200).json(updatedPost);
});

//delete a post
router.delete("/:id", async (req, res) => {
  const deletedPost = await Post.findOneAndDelete({
    _id: req.params.id,
    userId: req.body.userId,
  });
  if (!deletedPost) {
    return res
      .status(403)
      .json({ error: "User cannot delete someone else's post" });
  }
  res.status(200).json(updatedPost);
});

//get a post
router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.status(200).json(post);
});

// like/dislike a post
router.put("/:id/like", async (req, res) => {
  const user = await User.findById(req.body.userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(404).json({ error: "post not found" });
  }
  if (post.likes.includes(req.body.userId)) {
    post.likes.pull(req.body.userId);
  } else {
    post.likes.push(req.body.userId);
  }
  await post.save();
  res.status(200).json(post);
});

// get timeline posts
router.get("/timeline/:userId", async (req, res) => {
    const user = await User.findById(req.params.userId)
    if(!user){
        return res.status(401).json({ error: "user not found" });
    }
    const posts = await Post.find({userId: user.id});    
    const friendPosts = await Promise.all(user.followings.map(friendId =>{       
        return Post.find({userId: friendId})
    }))

    console.log(friendPosts);
    res.status(200).json(posts.concat(...friendPosts));
  });

// get all posts of user
router.get("/profile/:username", async (req, res) => {
  const user = await User.findOne({username : req.params.username})
  
  if(!user){
      return res.status(401).json({ error: "user not found" });
  }
  const posts = await Post.find({userId: user.id});    
  
  res.status(200).json(posts);
});

module.exports = router;
