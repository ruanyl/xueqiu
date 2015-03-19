var request = require('request');

function getCookieStr(url, callback) {
  var j = request.jar();
  var options = {
      url: url,
      jar: j,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'
      }
  };

  request(options, function(error, response, body) {
      if (!error && response.statusCode == 200) {
        var cookie_str = j.getCookieString('http://xueqiu.com');
        callback(cookie_str);
      }
  });

}

module.exports = {
  getCookieStr: getCookieStr
}
