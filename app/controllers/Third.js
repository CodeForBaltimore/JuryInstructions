var BaseController = require("./Base");
var View = require("../views/Base");

module.exports = BaseController.extend({ 
	name: "Third",
	run: function(req, res) {
        var template = 'third';
        var v = new View(res, template);
        v.render(req.body);
    }
});