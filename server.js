var express = require('express');
var app = express(); 
var port = process.env.PORT || 8080;
app.use(express.static('./public'));
app.listen(port);
console.log("App listening on port " + port);

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});