'use strict';

module.exports = function(validationFn){

	var errors = require('./errors.js')();
	
	return function(model){
		errors.clear();
		validationFn(model, errors);
		return errors.hasAny() ? errors.result() : undefined;
	};

};
