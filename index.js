var request = require('request');
var casper = require('casper').create({
  pageSettings: {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'
  }
});

casper.start('http://xueqiu.com/', function() {
  this.echo(this.getHTML());
  this.fill('form[action="/user/login"]', {username: 'ruanyu1@gmail.com', password: '44242863', remember_me: '1'}, true);
});

casper.then(function() {
  var url = 'http://xueqiu.com/cubes/rebalancing/history.json?cube_symbol=ZH010389&count=20&page=1';
  this.download(url, 'test.json');
});

casper.run(function() {
  this.echo('Done').exit();
});
