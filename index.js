
const express = require('express');
const app = require('./app');
const port = 3001;

app.get('/', (req, res)=>{
    res.send(`<h1>Default directory</h1>`);
})

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});