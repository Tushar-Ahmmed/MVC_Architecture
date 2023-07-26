const express = require('express');
const { productGet, productPost } = require('../controllers/product.controller');

const router = express.Router();


router.use(express.urlencoded({extended:false}));

router.get('/product', productGet);

router.post('/product', productPost);

module.exports = router;