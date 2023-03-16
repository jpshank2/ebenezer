const express = require('express');
const users = require('./entities')
const prayers = require('./prayers')
const router  = express.Router();

router.use("/users", users);
router.use("/prayers", prayers);

module.exports = router;