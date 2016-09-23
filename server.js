const express = require( 'express' );
const { json } = require( 'body-parser' );
const port = 4000;

const app = express();

const middleware = require( './controllers/middleware.js' )
const mainCtrl = require( './controllers/mainCtrl.js' )

app.use( json() );
app.use( middleware.addHeaders );

const mainRoutes = require( './mainRoutes.js' );
mainRoutes( app );

app.listen( port, () => { console.log( `Listening on ${ port }` ) } );
