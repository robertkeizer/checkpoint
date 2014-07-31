var util	= require( "util" );
var async	= require( "async" );

var checkpoint = function( cb ){
	var self = this;
	async.map( Object.keys( this ), function( key, cb ){
		console.log( "I have key of " + key );
		console.log( "Val is " + self[key] );
		cb( null );
	}, function( err, res ){
		cb( );
	} );
};

var testFunc = function( argA, argB, cb ){
	
	var t = argA + argB;

	checkpoint( function( ){
		cb( t % argA );
	} );
	
	return argA + argB;
};

testFunc( 5, 1, function( res ){
	console.log( "I have res of " + res );
} );
