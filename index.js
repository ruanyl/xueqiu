var cookie = require('./lib/cookie');
var fetch = require('./lib/fetch');
var data = require('./data/stock.json');
var async = require('async');

var q = async.queue(function(task, next) {
  fetch.rebalancing(task, function(data) {
    console.log(data);
    next();
  })
}, 10);

cookie.getCookieStr('http://xueqiu.com', function(cookie) {
  for(var key in data.combine) {
    q.push({symbol: key, cookie: cookie});
  }
});

q.drain = function() {
  console.log('done');
};
