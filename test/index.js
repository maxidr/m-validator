'use strict';

var validator = require('../index.js');
var test = require('tape');

test('validation with one error', function(t){
	//t.plan(1);

	var validate = validator(function(model, assert, errors){
		errors.add('field', 'error text');
	});

	var result = validate({});

	t.ok(result, 'should have a result');
	t.equal(result.field[0], 'error text', 'the error must be "error text"');
	t.end();
});