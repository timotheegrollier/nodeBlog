const express = require('express')
const router = express.Router()
const articleCtrl = require('../controllers/articles')

router.get('/list',articleCtrl.list)


module.exports = router;