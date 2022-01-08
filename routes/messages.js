const express = require('express')
const router = express.Router()
const msgCtrl = require('../controllers/messages')
const auth = require('../middlewares/auth')

router.post('/add',auth, msgCtrl.add)
router.get('/list',msgCtrl.list)
router.delete('/reset',auth,msgCtrl.deleteAll)

module.exports = router;