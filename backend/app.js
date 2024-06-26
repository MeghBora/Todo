const express = require('express');
require('dotenv').config();
const app = express();
const db = require('./utils/db');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRouter = require('./Routes/authRoutes');
const authMiddleWare = require('./Middlewares/auth');
const todoRoutes = require('./Routes/todoRoutes');
const errorMiddleware = require('./Middlewares/errorMiddleware.js')
app.use(bodyParser.json());
app.use(cookieParser());

db();

app.get('/', (req, res) => {
    res.send('hello from server');
})

app.use('/v1/user', userRouter);

app.use('/v1/todo', authMiddleWare, todoRoutes);

app.listen(process.env.PORT, () => {
    console.log('todo server running on ' + process.env.PORT);
});


app.use(errorMiddleware)