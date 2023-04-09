const router = require('express').Router()
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) { 
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    console.log('in file name', req);
    cb(null, req.body.name)
  }
});

const upload = multer({ storage: storage });

router.post('/image/post', upload.single('file'), function(req, res) {
  const file = req.file;

  if (!file) {
    res.status(400).json({ error: 'No file uploaded' });
  } else {
    console.log(req.body.name);
    res.status(200).json({ filename: file.filename });
  }
});

module.exports = router
