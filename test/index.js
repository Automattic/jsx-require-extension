'use strict';

var expect = require( 'chai' ).expect,
	React = require( 'react' );

describe( 'jsx-require-extension', function() {
	describe( 'default', function() {
		it( 'should enable loading of JSX files', function() {
			require( '../' );

			var MyComponent = React.createFactory( require( './fixtures/component' ) ),
				html = React.renderToString( MyComponent() );

			expect( html ).to.match( /^<div[^>]+>Hello World!<\/div>$/ );
		});
	});

	describe( 'harmony', function() {
		it( 'should enable loading of harmony JSX files', function() {
			require( '../options/harmony' );

			var MyComponent = React.createFactory( require( './fixtures/component.es6' ) ),
				html = React.renderToString( MyComponent() );

			expect( html ).to.match( /^<div[^>]+>Hello World!<\/div>$/ );
		});
	});

	describe( 'stripTypes', function() {
		it( 'should enable loading of JSX files using type annotations', function() {
			require( '../options/stripTypes' );

			var MyComponent = React.createFactory( require( './fixtures/component.flow' ) ),
				html = React.renderToString( MyComponent() );

			expect( html ).to.match( /^<div[^>]+><span[^>]+>Hello .*<\/div>$/ );
		});
	});
});