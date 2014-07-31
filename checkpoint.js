var async	= require( "async" );
var Promise	= require( "promise" );

var Checkpointer = function( checkpointConfiguration ){
	
	var checkpoint = function( scope ){

		var promise = new Promise( function( resolve, reject ){

			// Iterate over all the keys in the scope;
			async.map( Object.keys( scope ), function( key, cb ){
				console.log( "I have key of " + key );
				cb( null );

			}, function( err, res ){
				return resolve( null );
			} );
		} );

		return promise;
	};
};

module.exports = Checkpoint;
