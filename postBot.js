console.log('POST bot is starting');

var Twit = require('twit');
var config = require('./config');
// console.log(config);
var T = new Twit(config);

tweetIt();

setInterval(tweetIt, 1000*10); //tweet a random number for 10s interval

function tweetIt(){
    var r = Math.floor(Math.random()*100);

    var tweet = {
        status: 'Random number : ' + r + '\n#nangbest from node.js'
    }
    function tweeted(err, data, response) {
        if(err) console.log("Something went wrong");
        else console.log("It worked!!");
    }
    T.post('statuses/update', tweet, tweeted); //tweet '#nangbest from node.js'
}