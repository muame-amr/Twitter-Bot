//
//not working because TWITTER API stream has deprecated after updates
//
console.log('STREAM bot is starting');

var Twit = require('twit');
var config = require('./config');
// console.log(config);
var T = new Twit(config);

// Setting up a user stream
var stream = T.stream('user');

// Anytime someone follows me
stream.on('follow',followed);

function followed(eventMsg) {
    console.log("Follow event!");
    var name = eventMsg.source.name;
    var screenName = eventMsg.source.sreen_name;
    tweetIt('.@' + screenName + ' thanks :) do you like cats ?');
}

function tweetIt(txt){
    var tweet = {
        status: txt
    }
    function tweeted(err, data, response) {
        if(err) console.log("Something went wrong");
        else console.log("It worked!!");
    }
    T.post('statuses/update', tweet, tweeted); //tweet txt
}