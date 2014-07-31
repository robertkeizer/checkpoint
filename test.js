var util	= require( "util" );
var Promise	= require( "promise" );
var async	= require( "async" );

function Checkpointer( _global, checkpointArgs ){

	var self = this;

	this._filterGlobal = function( scope ){
		var promise = new Promise( function( resolve, reject ){

			console.log( "I have scope.t of " + scope.t );
			var _globalKeys = Object.keys( _global );
			async.filter( Object.keys( scope ), function( key, cb ){
				if( _globalKeys.indexOf( key ) >= 0 ){
					return cb( false );
				}
				return cb( true );
			}, function( res ){
				return resolve( res );
			} );
		} );

		return promise;
	};
	
	this.checkpoint = function( scope ){
		var promise = new Promise( function( resolve, reject ){
			self._filterGlobal( scope ).then( function( filteredScope ){
				console.log( "I have filteredScope of " + JSON.stringify( filteredScope ) );
				return resolve( null );
			} );
		} );
		return promise;
	};
};

var myCheckpointer = new Checkpointer( this, { "foo": "bar" } );

console.log( util.inspect( myCheckpointer ) );

var testFunc = function( argA, argB, cb ){
	
	var t = argA + argB;

	console.log( "this.t is " + this.t + " ( in testFunc )" );

	myCheckpointer.checkpoint( this ).then( function( ){
		cb( t % argA );
	} );
};

testFunc( 5, 1, function( res ){
	console.log( "I have res of " + res );
} );
