const express = require('express');
const router = express.Router();

const api = require('./api');
const root = require('./root');

router.use('/api/v1', api);
router.use('*', root);

module.exports = router;