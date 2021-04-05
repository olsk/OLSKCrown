const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKCrown_Misc', function () {

	const item = {
		OLSKCrownCardImageURL: Math.random().toString(),
		OLSKCrownCardNameText: Math.random().toString(),
	};

	before(function () {
		return browser.OLSKVisit(kDefaultRoute, item);
	});

	describe('OLSKCrown', function test_OLSKCrown () {
		
		it('classes OLSKToolbar', function () {
			browser.assert.hasClass(OLSKCrown, 'OLSKToolbar');
		});

		it('classes OLSKToolbarJustify', function () {
			browser.assert.hasClass(OLSKCrown, 'OLSKToolbarJustify');
		});

		it('classes OLSKStickyHeader', function () {
			browser.assert.hasClass(OLSKCrown, 'OLSKStickyHeader');
		});

		it('classes OLSKCommonEdgeBottom', function () {
			browser.assert.hasClass(OLSKCrown, 'OLSKCommonEdgeBottom');
		});
	
	});

	describe('OLSKCrownCard', function test_OLSKCrownCard () {
		
		it('classes OLSKCommonCard', function () {
			browser.assert.hasClass(OLSKCrownCard, 'OLSKCommonCard');
		});

		it('classes OLSKCommonCrownCardMini', function () {
			browser.assert.hasClass(OLSKCrownCard, 'OLSKCommonCrownCardMini');
		});

	});

	describe('OLSKCrownCardImage', function test_OLSKCrownCardImage () {

		it('sets role', function () {
			browser.assert.attribute(OLSKCrownCardImage, 'role', 'presentation');
		});

		it('binds OLSKCrownCardImageURL', function () {
			browser.assert.attribute(OLSKCrownCardImage, 'src', item.OLSKCrownCardImageURL);
		});
		
	});

	describe('OLSKCrownCardName', function test_OLSKCrownCardName () {

		it('sets text', function () {
			browser.assert.text(OLSKCrownCardName, item.OLSKCrownCardNameText);
		});
		
	});

});
