var BaseController = require("./Base"),
	View = require("../views/Base");

module.exports = BaseController.extend({ 
	name: "Home",
	content: null,
	run: function(req, res) {
		var self = this;
		
        var v = new View(res, 'home');
        v.render();
	}
});