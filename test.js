
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
