'use strict';

/*
module.exports = function(){
	return 'ok';
};
*/
var errorList = function(){
	var errors = {};

	return {
		add: function(field, message){
			if( !errors[field] ){
				errors[field] = [];
			}
			errors[field].push(message);
		},

		clear: function(){
			errors = {};
		},

		result: function(){ return errors; },

		hasAny: function(){ return Object.getOwnPropertyNames(errors).length > 0; }
	};
};


module.exports = function(validationFn){

	var errors = errorList();
	var assert = [];

	return function(model){
		errors.clear();
		validationFn(model, assert, errors);
		return errors.hasAny() ? errors.result() : undefined;
	};

};
