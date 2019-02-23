var express = require('express');
var router = express.Router();
 
router.use('/get_meta_data', require('./routes/meta_parser').router);

 
module.exports = router;
