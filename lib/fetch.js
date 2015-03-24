var request = require('request');

var baseUrl = 'http://xueqiu.com';

function rebalancing(options, callback) {
  var headers = genHeader(options);
  var reqOptions = {
    url: baseUrl + '/cubes/rebalancing/history.json?cube_symbol=' + options.symbol + '&count=50&page=1',
    headers: headers
  };

  request(reqOptions, function(error, res, body) {
    if (!error && res.statusCode == 200) {
      var combine = JSON.parse(body);
      callback(combine);
    }
  });
}

function fetchStock(options, callback) {}

function combineInfo(options, callback) {
  var headers = genHeader(options);
  var reqOptions = {
    url: baseUrl + '/P/' + options.symbol,
    headers: headers
  };

  request(reqOptions, function(error, res, body) {
    if (!error && res.statusCode == 200) {
      callback(body);
    }
  });
}

function genHeader(options) {
  var headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36',
    'Cookie': options.cookie,
    'Host': 'xueqiu.com',
    'Referer': 'http://xueqiu.com/P/' + options.symbol
  };

  return headers;
}

module.exports = {
  rebalancing: rebalancing,
  fetchStock: fetchStock,
  combineInfo: combineInfo
}
