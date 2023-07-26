const path = require('path');
const express = require('express');
const users = require(path.join(__dirname,"../models/product.data"));

exports.productGet = (req, res)=>{
    res.sendFile(path.join(__dirname,'../views/productData.html'));
}
exports.productPost=(req, res)=>{
    const name = req.body.name;
    const price = Number(req.body.price);
    users.push({name,price});
    res.status(201).json({
        success: true,
        users
    });
}