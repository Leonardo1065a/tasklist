const express = require('express');
const app = express();

app.use(express.static(__dirname  + '/dist/tasklist/'));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/dist/tasklist/index.html');
});

app.listen(process.env.PORT || 4200);
