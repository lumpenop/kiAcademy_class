// 폴더 내 하위 URL을 관리

const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.use('/join', controller.join);
router.use('/login', controller.login);
router.use('/info', controller.info);
router.use('/', controller.user)

module.exports = router;