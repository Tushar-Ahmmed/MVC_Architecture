const express = require('express');
const { userGet, userPost } = require('../controllers/users.controller');
const router = express.Router();


router.use(express.urlencoded({extended:false}));

router.get('/user', userGet);

router.post('/user', userPost);

module.exports = router;