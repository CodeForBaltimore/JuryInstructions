var BaseController = require("./Base");
var View = require("../views/Base");
var model = new (require("../models/Second"));

module.exports = BaseController.extend({ 
	name: "Second",
	run: function(req, res) { 
        model.setValues(req.body);
        var template = 'second';
        
        var v = new View(res, template); 
        v.render(model.values);
    }
});