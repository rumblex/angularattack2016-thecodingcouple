var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(bodyParser.raw({type: 'application/json'}));

app.post('/sentiment140/bulkClassifyJson', function(req, res) {
    var postOptions = {
        host: 'www.sentiment140.com',
        path: '/api/bulkClassifyJson?appid=ashley.grenon@gmail.com',
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': req.body.length
        }
    }
    
    var httpRequest = http.request(postOptions, function(httpResponse) {
        var body = '';
        httpResponse.on('data', function(data) {
            body += data;
        });
        httpResponse.on('end', function() {
            var jsonBody = JSON.parse(body);
            res.json(jsonBody);
        });
    });
    
    httpRequest.write(req.body);
    httpRequest.end();
});

app.listen(7020, function() {
    console.log("cors_forwarder listening on port 7020");
});