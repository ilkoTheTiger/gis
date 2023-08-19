var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})


app.post('/', function (req, res) {

    res.status(200).json({ user: "ilko" })
})

var server = app.listen(3005, function () {
    var host = server.address().address
    var port = server.address().port

    console.log(`Example app listening at http://${host}:${port}`)
})