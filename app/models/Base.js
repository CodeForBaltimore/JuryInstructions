module.exports = function() {
	this.values = '';
	this.response = '';
};
module.exports.prototype = {
	extend: function(properties) {
		var Child = module.exports;
		Child.prototype = module.exports.prototype;
		for(var key in properties) {
			Child.prototype[key] = properties[key];
		}
		return Child;
	},
	setValues: function(values) {
		this.values = {
            fname: values.fname,
			lname: values.lname,
			sex: values.sex,
            date: values.todaydate,
            offensedate: values.offensedate,
            homicide: values.homicide,
            firstDegreeAssult: values.first_degree_assult
		};
	}
}