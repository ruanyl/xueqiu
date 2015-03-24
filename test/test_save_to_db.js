var DB = require('../lib/db');
var schema = require('../lib/schema')

var db = new DB();
db.save({
  schema: schema.TestSchema,
  collection: 'testSchema',
  document: {
    name: 'bigruan',
    id: 12,
    birthday: '1988-10-20 12:22:11',
    age: 12
  }
});
db.close();
