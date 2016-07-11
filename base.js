var Xray = require('x-ray');
var querystring = require("querystring");

xray = {}

xray.base = function(){
    var x = Xray({
        filters: {
        clean_appleid: function(value){
            return typeof value === 'string' ? value.split('_')[1] : value;
        },
        clean_price: function (value) {
            return typeof value === 'string' ? value.replace('was','').trim() : value;
        },
        trim: function (value) {
            return typeof value === 'string' ? value.replace(/^\s+|\s+$/g, "").trim() : value;
        },
        first: function (value) {
            if( typeof value === 'string' ){
            return value.split(/\s/)[0];
            }else{
            return value;
            }
        },
        }
    });
    return x;
}

module.exports = xray