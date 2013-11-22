
var StrAlign = require('../src/str-align');

describe('StrAlign', function() {

	it('should handle empty strings', function() {
		expect(
			StrAlign.identify()
		).to.be.a('object');
	});

	describe('identify()', function() {

		it('should identify default align', function() {
			var result = StrAlign.identify('sample text');
			expect(result.align).to.equal('left');
			expect(result.text).to.equal('sample text');
		});

		it('should identify left align', function() {
			var result = StrAlign.identify('sample text<');
			expect(result.align).to.equal('left');
			expect(result.text).to.equal('sample text');
		});

		it('should identify right align', function() {
			var result = StrAlign.identify('>sample text');
			expect(result.align).to.equal('right');
			expect(result.text).to.equal('sample text');
		});

		it('should identify center align', function() {
			var result = StrAlign.identify('>sample text<');
			expect(result.align).to.equal('center');
			expect(result.text).to.equal('sample text');
		});

	});


	describe('apply', function() {

		it('should apply left align', function() {
			expect(
				StrAlign.apply('a', 3, 'left')
			).to.equal('a');
		});

		it('should apply right align', function() {
			expect(
				StrAlign.apply('a', 3, 'right')
			).to.equal('  a');
		});

		it('should apply center align', function() {
			expect(
				StrAlign.apply('a', 3, 'center')
			).to.equal(' a');
		});

	});

});