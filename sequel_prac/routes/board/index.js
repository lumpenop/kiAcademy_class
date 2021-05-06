const express = require('express');
const router = express.Router();
const controller = require('./board.controller.js');

router.use('/', (req,res)=>{
    res.render('../views/index.html');
})
router.use('/list', controller.list);
router.use('/view', controller.view);
router.use('/write', controller.write);
router.use('/modify', controller.modify);

// 주소가 /board/list 일 때

module.exports = router;

