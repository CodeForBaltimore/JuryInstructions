var BaseController = require("./Base");
var View = require("../views/Base");

module.exports = BaseController.extend({ 
	name: "Second",
	content: null,
	run: function(req, res) {
        var self = this;

        var template = 'second';
        var values = self.getSecond(req);
        
        var v = new View(res, template);
        v.render(values);
    },
    getSecond: function(req) {
        return {
            fname: req.body.fname,
            lname: req.body.lname,
            date: req.body.todaydate,
            offensedate: req.body.offensedate,
            homicide: req.body.homicide,
            firstDegreeAssult: req.body.first_degree_assult
        };
    }
});