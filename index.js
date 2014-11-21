'use strict';

var fs = require( 'fs' ),
	ReactTools = require( 'react-tools' );

var register = module.exports = function( options ) {
	require.extensions['.jsx'] = function( module, filename ) {
		var content = fs.readFileSync( filename, 'utf8' ),
			compiled = ReactTools.transform( content, options );

		return module._compile( compiled, filename );
	};
};

if ( ! module.parent || module.parent.filename.indexOf( __dirname + '/options' ) === -1 ) {
	register();
}