'use strict';

module.exports = function(){
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