var facebook = require('../libs/facebook');
var expect = require('chai').expect;
var post = {
  message: 'This is a second test post',
  // tags: '1271441119',
};

describe('facebook library', function() {
  this.timeout(10 * 1000);
  it('shoud post to facebook', function(done) {
    facebook(post, function (data) {
      expect(data.id).is.exist;
      done();
    })
  });
});
