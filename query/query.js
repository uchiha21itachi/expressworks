const express = require('express');

const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended: false}))

app.get('/search', function(req, res){
    res.send(req.query);
})
app.listen(process.argv[2]);