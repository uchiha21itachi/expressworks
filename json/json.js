const fs = require('fs');
const express = require('express');

const app = express();

app.get('/books', function(req, res){
    const data = fs.readFileSync(process.argv[3]);
    res.send(JSON.parse(data));
})

app.listen(process.argv[2]);