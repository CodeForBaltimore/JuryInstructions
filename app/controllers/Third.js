var BaseController = require("./Base");
var View = require("../views/Base");
var model = new (require("../models/Third"));

module.exports = BaseController.extend({ 
	name: "Third",
	run: function(req, res) {
        model.setValues(req.body);
        model.setHomicide(req.body);
        var template = 'third';
        
        var v = new View(res, template);
        v.render(model.values);
    }
});