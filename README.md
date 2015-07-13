## A very simple validator object for mithril (or ever any other)

[![Code Climate](https://codeclimate.com/github/maxidr/m-validator/badges/gpa.svg)](https://codeclimate.com/github/maxidr/m-validator)

### Example with mithril

```javascript

var validator = require('m-validator');
var m = require('mithril');

// Example object using mithril property
var user = {
    name: m.prop();
}

var validate = validator(function(model, errors){
    if( model.name() !== 'James' ){
        errors.add('name', 'name must be James'); 
    }
});

user.name('John');
var errors = validate(user);
// => { 'name': [ 'name must be James' ] }

user.name('James');
validate(user);
// => undefined

```

### Without mithril

```javascript

var validator = require('m-validator');

var validate = validator(function(model, errors){
    if( model.name !== 'James' ){
        errors.add('name', 'name must be James'); 
    }
});

var user = {};

user.name = 'John';
var errors = validate(user);
// => { 'name': [ 'name must be James' ] }

user.name = 'James';
validate(user);
// => undefined

```

## Errors API

```javascript

var errors = require('m-validator/errors');

errors.add('lastName', 'The last name is required');
errors.hasAny(); 
// => true

errors.clear();
errors.hasAny();
// => false

errors.add('default', 'Server API fails');
errors.add('default', 'Another general error');
errors.add('lastName', 'The last name is required');
error.result();
// => 
// {
//  "default": ["Server API fails", "Another general error"],
//  "lastName": ["The last name is required"]
//  }

```
