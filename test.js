var util	= require( "util" );
var Promise	= require( "promise" );
var async	= require( "async" );

function Checkpointer( checkpointArgs ){
	
	this.checkpoint = function( scope ){
		var promise = new Promise( function( resolve, reject ){
			console.log( "Would look through scope.." );
			return resolve( null );
		} );
		return promise;
	};
};

var myCheckpointer = new Checkpointer( { "foo": "bar" } );

console.log( util.inspect( myCheckpointer ) );

var testFunc = function( argA, argB, cb ){
	
	var t = argA + argB;

	myCheckpointer.checkpoint( this ).then( function( ){
		cb( t % argA );
	} );
};

testFunc( 5, 1, function( res ){
	console.log( "I have res of " + res );
} );
