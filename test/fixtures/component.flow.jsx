/** @jsx React.DOM */

'use strict';

var React = require( 'react' );

var MyComponent = module.exports = React.createClass({
	getGreeting: function( toWhom: string ) {
		return ( <div>Hello { toWhom }!</div> );
	},

	render: function() {
		return this.getGreeting( 'World' );
	}
});