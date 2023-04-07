const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKCrown: '.OLSKCrown',
	
	OLSKCrownCard: '.OLSKCrownCard',
	OLSKCrownCardImage: '.OLSKCrownCardImage',
	OLSKCrownCardName: '.OLSKCrownCardName',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('OLSKCrown_Access', function () {
	
	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	it('shows OLSKCrown', function() {
		return browser.assert.elements(OLSKCrown, 1);
	});

	it('shows OLSKCrownCardImage', function () {
		return browser.assert.elements(OLSKCrownCardImage, 1);
	});

	it('shows OLSKCrownCardName', function () {
		return browser.assert.elements(OLSKCrownCardName, 1);
	});

	it('shows OLSKLanguageSwitcher', function () {
		return browser.assert.elements('.OLSKLanguageSwitcher', 1);
	});
	
});
