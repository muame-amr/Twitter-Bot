console.log('GET bot is starting');

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
//
//  search twitter for all tweets containing the word 'banana' since Nov 01, 2018
//
var params = { 
    q: 'banana since:2018-11-01', 
    count: 2 
}
function gotData(err, data, response) {
    var tweets = data.statuses;
    for(var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
    }
}
//  search twitter for all tweets containing the word 'banana' since Nov 01, 2018
T.get('search/tweets', params, gotData);