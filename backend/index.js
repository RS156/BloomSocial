const express = require("express");
require('express-async-errors')
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const middleware = require('./utils/middleware')
const userRouter = require("./controllers/user");
const authRouter = require('./controllers/auth')

dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(_ =>  {
    console.log('Successfully connected to mongoose');
})

const app = express();
app.use(express.json());

app.use(cors());
app.use(helmet());

app.use(morgan("common"));
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter)




app.use(middleware.unknownEndpoint)

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
