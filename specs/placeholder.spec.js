
var placeholder = require('../src/placeholder'),
	pkg = require('../package.json');

describe('placeholder()', function() {

	it('should interpret placeholders', function() {

		expect(
			placeholder('{{name}}')
		).to.equal(pkg.name);

	});

});