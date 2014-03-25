var config = require('./config.js'),
    express = require('express'),
    app = express();

app.use(express.bodyParser());

app.get('/', function( req, res ) {
    res.send('Start');
});

app.listen(config.server.port, config.server.ip, function( error ) {
    if ( error ) {
        console.log('Unable to listen for connection', error);
        return;
    }

    console.log('Express listening on ' + config.server.ip + ':' + config.server.port);
});