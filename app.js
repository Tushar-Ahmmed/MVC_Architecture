const path = require("path");
const userRouter = require(path.join(__dirname,'routes/user.route'));
const productRoute = require(path.join(__dirname,'routes/product.route'));
const express = require('express');
const app = express();
app.use(userRouter);
app.use(productRoute);


app.get('/', (req, res)=>{
    res.send(`<h1>Default directory</h1>`);
})

app.use((req, res)=>{
    res.send(`<h1>404!! <br>directory</h1>`);
});


module.exports = app;