
var sys = require('sys');

var asciiBanner = require('../src/ascii-banner');

describe('Banner', function() {

	it('should go to the end', function(done) {
		var sysStub = sinon.stub(sys, 'puts', function() {});
		asciiBanner.write().out(function() {
			expect(sysStub.called).to.be.true;
			sysStub.restore();
			done();
		});
	});

});