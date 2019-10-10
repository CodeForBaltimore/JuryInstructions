var BaseModel = require("./Base");
var model = new BaseModel();

module.exports = model.extend({
    name: "Third",
    setHomicide: function(hvalues) {
        values = {
            dfname: hvalues.dfname,
            dlname: hvalues.dlname,
            substances: [
                hvalues.alcohol,
                hvalues.drugs 
            ]
        }

        this.values = {...this.values, ...values};
    }
});