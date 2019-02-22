var express = require('express');
var router = express.Router();
 
//  // Define the home page route
// router.get('/', function(req, res) {
//   res.send('home page');
// });

router.use('/get_meta_data', require('./routes/meta_parser').router);

 
module.exports = router;