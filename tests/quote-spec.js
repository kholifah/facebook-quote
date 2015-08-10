var quote = require('../libs/quote');
var expect = require('chai').expect;

describe('Quote library', function() {
  this.timeout(10 * 1000);
  it('shoud get new quote', function(done) {
    quote(function (err, data) {
      console.log(data);
      if (err)return done(err);
      expect(data.quote).is.exist;
      done();
    })
  });
});
