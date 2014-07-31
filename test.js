var promise	= require( "promise" );
var async	= require( "async" );

var checkpointer = function( checkpointArgs ){
	
	var checkpoint = function( scope ){
		var promise = new Promise( function( resolve, reject ){
			console.log( "Would look through scope.." );
			return resolve( null );
		} );
		return promise;
	};
};

var myCheckpointer = new checkpointer( { "foo": "bar" } );

console.log( JSON.stringify( checkpointer ) );

var testFunc = function( argA, argB, cb ){
	
	var t = argA + argB;

	myCheckpointer.checkpoint( this ).then( function( ){
		cb( t % argA );
	} );
};

testFunc( 5, 1, function( res ){
	console.log( "I have res of " + res );
} );
