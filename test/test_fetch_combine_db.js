var cookie = require('../lib/cookie');
var fetch = require('../lib/fetch');
var data = require('../data/stock.json');
var async = require('async');
var DB = require('../lib/db');
var Schema = require('../lib/schema');

var db = new DB(Schema.CombinationSchema, 'combination');

var q = async.queue(function(task, next) {
  fetch.rebalancing(task, function(data) {
    data.symbol = task.symbol;
    db.save(data);
    next();
  })
}, 5);

cookie.getCookieStr('http://xueqiu.com', function(cookie) {
  for (var symbol in data.combine) {
    q.push({
      symbol: symbol,
      cookie: cookie
    });
  }
});

q.drain = function() {
  console.log('done');
  //db.close();
};
