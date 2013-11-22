/**
 * Parse placeholders from a string using process related
 * "package.json" as data source
 * @type {*}
 */


var fs = require('fs')
	Mustache = require('mustache')
	HtmlEntities = require('html-entities').XmlEntities
;

var _pkg = {};
if (fs.existsSync(process.cwd() + '/package.json')) {
	_pkg = require(process.cwd() + '/package.json');
}

var htmlentities = new HtmlEntities;

module.exports = function(text) {
	return htmlentities.decode(Mustache.render(htmlentities.encode(text), _pkg));
};
