var cookie = require('../lib/cookie');
var fetch = require('../lib/fetch');
var data = require('../data/stock.json');
var async = require('async');
var DB = require('../lib/db');
var Schema = require('../lib/schema');

var db = new DB(Schema.CombinationSchema, 'combination');

var q = async.queue(function(task, next) {
  var taskName = task['name'];
  if(!taskName) {
    throw 'Task Name should defined';
  } else {
    var run = getTaskRunner(taskName);
    run(task, next);
  }

}, 11);

q.drain = function() {
  console.log('done');
};

function fetchRebalancing() {
  cookie.getCookieStr('http://xueqiu.com', function(cookie) {
    for (var symbol in data.combine) {
      q.push({
        name: 'rebalancing',
        symbol: symbol,
        cookie: cookie
      });
      console.log(symbol + "\n");
    }
  });
}

function rebalancingRunner(task, next) {
  fetch.rebalancing(task, function(data) {
    data.symbol = task.symbol;
    db.save(data);
    next();
  });
}

function getTaskRunner(taskName) {
  var taskMapping = {
    'rebalancing': rebalancingRunner
  };

  return taskMapping[taskName];
}

module.exports = {
  fetchRebalancing: fetchRebalancing
};
