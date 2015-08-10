var fb = require('./libs/facebook');
var quote = require('./libs/quote');

quote(function (err, data) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  var post = {
    message: data.quote + '\n--' + data.author,
    tags: '1271441119'
  };
  fb(post, function(err, data) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(data);
    process.exit(0);
  });
})
