var express = require('express');
var PORT = 8081;

// App
var app = express();

app.get('/smzdm_api', function (req, res) {
  require('./smzdm').home().stream().pipe(res);
});

app.use('/', express.static('public') );

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
