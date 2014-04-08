var _ = require( 'underscore' ),
    config = require( './config.js' ),
    routes = require( './routes' ),
    engines = require( 'consolidate' ),
    express = require( 'express' ),
    app = express();

// Setup server
app.engine( 'html', engines.underscore );
app.set( 'view engine', 'html' );
app.use( app.router );
app.use( express.static('/public') );
app.use( express.compress() );
app.use( express.urlencoded() );

if ( config.env !== 'prod' ) {
    app.use( express.logger('dev') );
}

// Routes
app.get( '/', routes.index );

app.listen( config.server.port, config.server.ip, function( error ) {
    if ( error ) {
        console.log( 'Unable to listen for connection', error );
        return;
    }

    console.log( 'Express listening on ' + config.server.ip + ':' + config.server.port );
});