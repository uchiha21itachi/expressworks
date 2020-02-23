const express = require('express');
const crypto = require('crypto');

const app = express();
app.put('/message/:ID', function (req, res){
    res.send(crypto.createHash('sha1').update(new Date().toDateString() + req.params.ID).digest('hex'))
})
app.listen(process.argv[2]);
