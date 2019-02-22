var cheerio = require('cheerio');
var request = require('request');
var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    var options = {
        url: req.body.url,
        timeout: 5000,
        headers: {
            'User-Agent': 'request'
        }
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var bodyObj = cheerio.load(body);
            var meta = bodyObj('meta');
            var keys = Object.keys(meta);
            var meta_obj = {};
            var og_meta_obj = {};
            keys.forEach(function (key) {
                if (meta[key].attribs != undefined) {
                    if (meta[key].attribs.property && meta[key].attribs.content) {
                        if(meta[key].attribs.property.includes("og:")){
                            // find if the tag is meta tag
                            og_meta_obj[meta[key].attribs.property] = meta[key].attribs.content;
                        }else{
                            meta_obj[meta[key].attribs.property] = meta[key].attribs.content;
                        }
                    }else if (meta[key].attribs.name && meta[key].attribs.content) {
                        // find if the tag is meta tag
                        if(meta[key].attribs.name.includes("og:")){
                            og_meta_obj[meta[key].attribs.name] = meta[key].attribs.content;
                        }else{
                            meta_obj[meta[key].attribs.name] = meta[key].attribs.content;
                        }
                    }
                }
            });
            res.send({ "meta_obj" : meta_obj, "og:data" : og_meta_obj});
        } else {
            if (response && typeof response.statusCode !== 'undefined') {
                res.status(response.statusCode).send("URL not a success response");
            } else {
                res.status(404).send("URL resource not found");
            }
        }
    });
});

module.exports.router = router;