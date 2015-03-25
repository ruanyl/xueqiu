var cookie = require('../lib/cookie');
var fetch = require('../lib/fetch');
var data = require('../data/stock.json');
var async = require('async');
var DB = require('../lib/db');
var Schema = require('../lib/schema');

var db = new DB(Schema.CombinationSchema, 'combination');

db.Model.findOne({symbol: 'ZH149088'}, function(err, doc) {
  if(err) console.log('Error: ' + err);
  if(doc) {
    doc.list.push({id: 1, status: 'fail'});
    doc.save();
  }
});
