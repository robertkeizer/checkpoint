var util		= require( "util" );
var checkpointer	= require( "./checkpoint" )( { "foo": "bar" } );

console.log( util.inspect( checkpointer ) );

var testFunc = function( argA, argB, cb ){
	
	var t = argA + argB;

	checkpointer.checkpoint( this ).then( function( ){
		cb( t % argA );
	} );
};

testFunc( 5, 1, function( res ){
	console.log( "I have res of " + res );
} );
