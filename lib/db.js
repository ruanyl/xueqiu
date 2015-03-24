var mongoose = require('mongoose');

function DB() {
  mongoose.connect('mongodb://localhost/xueqiu');
  this.db = mongoose.connection;

  db.on('error', function() {
    console.log('connection error:');
  });
}

DB.prototype.save = function(data) {
  var Schema = mongoose.Schema(data.schema);
  var Model = mongoose.model(data.collection, Schema);
  var instance = new Model(data.document);
  instance.save();
};

module.exports = DB;
