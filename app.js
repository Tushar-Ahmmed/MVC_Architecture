const path = require("path");
const userRouter = require(path.join(__dirname,'routes/user.route'));
const express = require('express');
const app = express();
app.use(userRouter);


app.use((req, res)=>{
    res.send(`<h1>404!! <br>directory</h1>`);
});

app.get('/', (req, res)=>{
    res.send(`<h1>Default directory</h1>`);
})

module.exports = app;