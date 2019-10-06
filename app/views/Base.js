module.exports = function(response, template) {
	this.response = response;
	this.template = template;
};
module.exports.prototype = {
	extend: function() {
	},
	render: function(data) {
		if(this.response && this.template) {
			this.response.render(this.template, data);
		}
	}
}