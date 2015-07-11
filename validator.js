'use strict';

module.exports = function(validationFn){

	var errors = require('./errors.js')();
	var assert = [];

	return function(model){
		errors.clear();
		validationFn(model, assert, errors);
		return errors.hasAny() ? errors.result() : undefined;
	};

};
