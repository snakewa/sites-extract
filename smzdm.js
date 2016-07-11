var xray = require('./base.js');
var querystring = require("querystring");


var smzdm = {}
smzdm.home = function(query){
    var x = xray.base()
    var query_x = x('http://www.smzdm.com/', '[articleid]', [{
        'title': 'h4 a | trim',
        'price': 'h4 a span | trim',
        'link': 'h4 a@href',
        'image': '.picLeft img@src',
        'icon' : 'h4 .icon',
        'desc' : '.lrInfo',
        'tags' : x('.lrTop', [ {'tag':'a', 'link':'a@href'} ] ) ,
        'reactions':{
        	'good':'.good .scoreTotal em',
        	'bad':'.bad .scoreTotal em',
        	'fav': '.fav em',
        	'comment': '.comment em',
        }
    }])
    return query_x
}

smzdm.home2 = function(query){
    var x = xray.base()
    var query_x = x('http://www.smzdm.com/') .select([{
	    $root: '[articleid]',
	    title: '[articleid] h4 a | trim'
  	}])
    return query_x
}


module.exports = smzdm