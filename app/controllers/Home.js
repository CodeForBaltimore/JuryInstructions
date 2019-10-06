var BaseController = require("./Base")
var View = require("../views/Base");

module.exports = BaseController.extend({ 
	name: "Home",
	content: null,
	run: function(req, res) {
        var v = new View(res, 'home');
        v.render();
	}
});