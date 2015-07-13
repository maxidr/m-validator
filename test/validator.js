'use strict';

var validator = require('../validator.js');
var test = require('tape');
var m = require('mithril');

function User(name){
	this.name = m.prop(name);
}

var validate = validator(function(model, errors){
	if( model.name() !== 'James' ){ errors.add('name', 'name must be James'); }
});

test('Validation with one error', function(t){
	var errors = validate( new User('John') );
	t.ok(errors, 'should have a errors');
	t.equal(errors.name[0], 'name must be James', 'must be the error text in the field');

	t.comment('If run validation again, the old errors must be cleaned');
	
	var errorsInSecondRun = validate( new User('James Smart') );
	t.equal(errorsInSecondRun.name.length, 1, 'should have one error (old cleaned)');
	t.equal(errorsInSecondRun.name[0], 'name must be James', 'must be the error text in the field');

	t.end();
});

test('Validation without errors', function(t){
	var errors = validate( new User('James') );
	console.log('errors: ' + errors);
	t.false(errors, 'errors must be false');
	t.end();
});