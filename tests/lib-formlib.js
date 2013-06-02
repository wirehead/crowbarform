var formlib = require('../lib/formlib.js');
var cheerio = require('cheerio')

exports['test_form_textarea'] = function(test, assert) {
	var properties = {formtype: 'textarea'};
	var output = formlib.makeForm(true, 'blah',properties, undefined);
	var $ = cheerio.load(output)
	assert.deepEqual($('textarea').attr('style'), "font:inherit; display:inline")
	assert.deepEqual($('textarea').attr('rows'), "20")
	assert.deepEqual($('textarea').attr('cols'), "65")
	assert.deepEqual($('textarea').attr('id'), "id_blah")
	assert.deepEqual($('textarea').attr('name'), "blah")
	assert.deepEqual($('textarea').val(), "")

	output = formlib.makeForm(true, 'blah',properties, 'blaf');
	$ = cheerio.load(output)
	assert.deepEqual($('textarea').attr('style'), "font:inherit; display:inline")
	assert.deepEqual($('textarea').attr('rows'), "20")
	assert.deepEqual($('textarea').attr('cols'), "65")
	assert.deepEqual($('textarea').attr('id'), "id_blah")
	assert.deepEqual($('textarea').attr('name'), "blah")
	assert.deepEqual($('textarea').val(), "blaf")
	test.finish();
};

exports['test_form_textblock'] = function(test, assert) {
	var properties = {formtype: 'textblock'};
	var output = formlib.makeForm(true, 'blah',properties, undefined);
	var $ = cheerio.load(output);
	assert.deepEqual($('textarea').attr('style'), "font:inherit; display:inline");
	assert.deepEqual($('textarea').attr('rows'), "20");
	assert.deepEqual($('textarea').attr('cols'), "65");
	assert.deepEqual($('textarea').attr('id'), "id_blah");
	assert.deepEqual($('textarea').attr('name'), "blah");
	assert.deepEqual($('textarea').val(), "");
	assert.deepEqual($('select').attr('name'), "blah.type");
	assert.deepEqual($('select').find('option[value=plainishtext]').text(),
				     'plainishtext')
	assert.deepEqual($('select').find('option[value=markdown]').text(),
				     'markdown')
	assert.deepEqual($('select').find('option[value=atxplaintext]').text(),
				     'atxplaintext')
					 
	output = formlib.makeForm(true, 'blah',properties, 'blaf');
	$ = cheerio.load(output);
	assert.deepEqual($('textarea').attr('style'), "font:inherit; display:inline");
	assert.deepEqual($('textarea').attr('rows'), "20");
	assert.deepEqual($('textarea').attr('cols'), "65");
	assert.deepEqual($('textarea').attr('id'), "id_blah");
	assert.deepEqual($('textarea').attr('name'), "blah");
	assert.deepEqual($('textarea').val(), "blaf");
	assert.deepEqual($('select').attr('name'), "blah.type");
	assert.deepEqual($('select').find('option[value=plainishtext]').text(),
				     'plainishtext')
	assert.deepEqual($('select').find('option[value=markdown]').text(),
				     'markdown')
	assert.deepEqual($('select').find('option[value=atxplaintext]').text(),
				     'atxplaintext')
	test.finish();
};


exports['test_form_text'] = function(test, assert) {
	var properties = {};
	var output = formlib.makeForm(true, 'blah',properties, undefined);
	var $ = cheerio.load(output);
	assert.deepEqual($('input').attr('style'), "font:inherit; display:inline");
	assert.deepEqual($('input').attr('type'), "text");
	assert.deepEqual($('input').attr('name'), "blah");
	assert.deepEqual($('input').attr('id'), "id_blah");
	assert.deepEqual($('input').val(), "");

	output = formlib.makeForm(true, 'blah',properties, 'blaf')
	$ = cheerio.load(output);
	assert.deepEqual($('input').attr('style'), "font:inherit; display:inline");
	assert.deepEqual($('input').attr('type'), "text");
	assert.deepEqual($('input').attr('name'), "blah");
	assert.deepEqual($('input').attr('id'), "id_blah");
	assert.deepEqual($('input').val(), "blaf");
	test.finish();
};

exports['test_form_boolean'] = function(test, assert) {
	var properties = {formtype: 'checkbox'};
	var output = formlib.makeForm(true, 'blah',properties, undefined);
	var $ = cheerio.load(output);
	assert.deepEqual($('input').attr('type'), "checkbox");
	assert.deepEqual($('input').attr('name'), "blah");
	assert.deepEqual($('input').attr('id'), "id_blah");
	assert.deepEqual($('input').attr('value'), "true");
	assert.deepEqual($('input').val(), null);

	output = formlib.makeForm(true, 'blah',properties, true)
	$ = cheerio.load(output);
	assert.deepEqual($('input').attr('type'), "checkbox");
	assert.deepEqual($('input').attr('name'), "blah");
	assert.deepEqual($('input').attr('id'), "id_blah");
	assert.deepEqual($('input').attr('value'), "true");
	assert.deepEqual($('input').val(), "true");
	test.finish();
};
