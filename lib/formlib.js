var textblock = require('textblocks');
var html = require('pithy');

var makeBlock = function(item, properties, str) {
	return "<div>" + str + "</div>"
};

var formElem = {
	'textblock': function(inline, item, properties, value) {
		var rows = 20;
		var cols = 65;
		if (properties.hasOwnProperty('rows')) {
			rows = properties.rows;
		}
		if (properties.hasOwnProperty('cols')) {
			cols = properties.cols;
		}
		var str = html.textarea({style: 'font:inherit; display:inline',
							     rows: rows, cols: cols, id: "id_" + item,
							     name: item},value);
		str = str + html.br();
		str = str + "Format: ";
		
		var arr = []

		textblock.formatsList.forEach(function(element, index, array) {
			arr.push(html.option({value: element},element))
		});	
		str = str + html.select({name: item + '.type'},arr);
		return str;	
	},
	'checkbox':  function(inline, item, properties, value) {
		var props = {type: "checkbox", name: item, value: "true",
					 id: "id_" + item};
		if (value) {
			props.checked = true;
		}
		return html.input(props);
	},
	'textarea': function(inline, item, properties, value) {
		var rows = 20;
		var cols = 65;
		if (properties.hasOwnProperty('rows')) {
			rows = properties.rows;
		}
		if (properties.hasOwnProperty('cols')) {
			cols = properties.cols;
		}
		return html.textarea({style: 'font:inherit; display:inline',
							  rows: rows, cols: cols, id: "id_" + item,
							  name: item},value);
	}
}

var makeForm = function(inline, item, properties, value) {
	var str;
	var cont = value;
	if (!cont) {
		cont = '';
	}
	if (formElem.hasOwnProperty(properties.formtype)) {
		str = formElem[properties.formtype](inline, item, properties, cont);
	} else {
		str = '<input '
		if (inline) {
			str = str + 'style="font:inherit; display:inline" '
		}
		str = str + 'type="text" name="'+item+'" value="' + cont  + '" id="id_' + item + '"/>';
	}
	return str;
}

var makeLabel = function(item, properties) {
	var str;
	str = '<label for="id_' + item + '">' + item + "</label>";
	return str;
}

exports.makeForm = makeForm;
exports.makeLabel = makeLabel;
exports.makeBlock = makeBlock;
