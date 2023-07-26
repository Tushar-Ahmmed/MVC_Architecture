const path = require('path');
const express = require('express');
const users = require(path.join(__dirname,"../models/user.data"));

exports.userGet = (req, res)=>{
    res.sendFile(path.join(__dirname,'../views/userData.html'));
}
exports.userPost=(req, res)=>{
    const name = req.body.name;
    const age = Number(req.body.age);
    users.push({name,age});
    res.status(201).json({
        success: true,
        users
    });
}