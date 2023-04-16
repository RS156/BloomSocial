const express = require("express");
require('express-async-errors')
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const middleware = require('./utils/middleware')
const usersRouter = require("./controllers/user");
const authRouter = require('./controllers/auth')
const postsRouter = require('./controllers/posts')
const uploadRouter = require('./controllers/upload')
const testingRouter = require('./controllers/testing')
const path=require('path')

dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(_ =>  {
    console.log('Successfully connected to mongoose');
})

const app = express();
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'uploads')))

app.use(cors());
app.use(helmet());

app.use(morgan("common"));
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/testing", testingRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
