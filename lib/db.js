var mongoose = require('mongoose');

function DB(schema, collection) {
  mongoose.connect('mongodb://localhost/xueqiu');
  this.db = mongoose.connection;

  this.db.on('error', function() {
    console.log('connection error:');
  });

  this.Schema = mongoose.Schema(schema);
  this.Model = mongoose.model(collection, this.Schema);
}

DB.prototype.save = function(data) {
  var instance = new this.Model(data.document);
  instance.save();
};

DB.prototype.close = function() {
  this.db.close();
};

module.exports = DB;
