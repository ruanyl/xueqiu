var cookie = require('./lib/cookie');
var fetch = require('./lib/fetch');
var data = require('./data/stock.json');

cookie.getCookieStr('http://xueqiu.com', function(cookie) {
  for(var key in data.combine) {
    fetch.rebalancing({symbol: key, cookie: cookie}, function(combine) {
      console.log(combine);
      console.log('=================================================');
    });
  }
});
