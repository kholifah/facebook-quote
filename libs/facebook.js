// console.log(__dirname + '/.env');
require('dotenv').load();
var fb = require('fb');

module.exports = function (post, callback) {
  post.access_token = process.env.FACEBOOK_TOKEN;
  fb.api('/me/feed', 'post', post, function (data) {
    if (!data.id)
      return callback(new Error('Post failed!'));
    callback(null, data);
  });
};
