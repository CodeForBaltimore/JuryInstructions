var BaseController = require("./Base");
var View = require("../views/Base");

module.exports = BaseController.extend({ 
	name: "Second",
	run: function(req, res) { 
        var template = 'second';
        var v = new View(res, template); 
        v.render(req.body);
    }
});