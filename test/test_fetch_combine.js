var cookie = require('../lib/cookie');
var fetch = require('../lib/fetch');
var data = require('../data/stock.json');
var async = require('async');

var q = async.queue(function(task, next) {
  fetch.rebalancing(task, function(data) {
    console.log(data);
    next();
  })
}, 10);

cookie.getCookieStr('http://xueqiu.com', function(cookie) {
  for(var symbol in data.combine) {
    q.push({symbol: symbol, cookie: cookie});
  }
});

q.drain = function() {
  console.log('done');
};
