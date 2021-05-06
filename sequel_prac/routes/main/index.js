
const express = require('express');
const router = express.Router();
const controller = require('./main.controller');

router.get('/',controller.main);
// 주소가 '/'일 때


module.exports = router;