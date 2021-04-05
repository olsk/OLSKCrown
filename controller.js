exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'main'), Object.assign({
					OLSKCrownCardImageURL: Math.random().toString(),
					OLSKCrownCardNameText: Math.random().toString(),
					OLSKCrown_DebugModulesFolder: './node_modules'
				}, Object.fromEntries((new URLSearchParams(req.query)).entries())));
		},
		OLSKRouteLanguageCodes: ['en'],
		OLSKRouteSignature: 'OLSKCrownStubRoute',
	}];
};
