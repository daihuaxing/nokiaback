var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nokia',{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('数据库已连接')
});