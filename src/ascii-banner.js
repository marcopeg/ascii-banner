

var sys = require('sys'),
	colors = require('colors'),
	asciimo = require('asciimo').Figlet,
	extend = require('extend')
;


var Placeholder = require('./placeholder'),
	StrAlign = require('./str-align')
;

var _text = null,
	_font = null,
	_color = null,
	_before = [],
	_after = [],
	_width = 0
;

module.exports.reset = function() {
	_text = null;
	_font = null;
	_color = null;
	_before = [];
	_after = [];
	_width = 0;
	return this;
};

module.exports.write = function(text, color) {
	this.text(text);
	this.color(color);
	return this;
};

module.exports.text = function(text) {
	if (text) {
		_text = text;
	}
	return this;
};

module.exports.font = function(font) {
	if (font) {
		_font = font;
	}
	return this;
};

module.exports.color = function(color) {
	if (color) {
		_color = color;
	}
	return this;
};


/**
 * before() / after()
 *
 * adds lines before and after the banner.
 * - empty string add an empty line
 * - an integer number add N empty lines
 *
 * you can use in-string alignment syntax:
 * - "string aligned to left"
 * - ">string aligned to right"
 * - ">centered string<"
 *
 * @param string
 * @param color
 * @returns {exports}
 */
module.exports.before = function(string, color) {
	if (typeof string == 'number') {
		for (var i=0; i<string; i++) {
			this.before();
		}
	} else {
		_before.push({
			text: string || '',
			color: color
		});
	}
	return this;
};

module.exports.after = function(string, color) {
	if (typeof string == 'number') {
		for (var i=0; i<string; i++) {
			this.after();
		}
	} else {
		_after.push({
			text: string || '',
			color: color
		});
	}
	return this;
};






module.exports.out = function(callback) {
	asciimo.write(Placeholder(_text || '{{name}}'), _font || 'starwars', function(art) {

		// remove bottom line
		art = art.substr(0, art.lastIndexOf('\n'));
		
		_width = art.indexOf('\n');
		
		_before.forEach(addLine);
		
		if (_color) {
			sys.puts(art[_color]);
		} else {
			sys.puts(art);
		}
		
		_after.forEach(addLine);
		
		if (callback && typeof callback == 'function') {
			callback();
		}
	});
};






/**
 * Add a line with alignment capability based on art graphic width.
 */
function addLine(line) {
	line = extend(true, line, StrAlign.identify(line.text));
	line.text = Placeholder(line.text);
	line.text = StrAlign.apply(line.text, _width, line.align);

	if (line.color) {
		sys.puts(line.text[line.color]);
	} else {
		sys.puts(line.text);
	}
}

