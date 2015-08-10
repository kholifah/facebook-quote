var request = require('request');
var url = "https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous";
var headers = {
  "X-Mashape-Key": "xuRPohtRP2mshiBW6mnV1jE0dUSBp1RiLysjsnLlXwl3ZbjHmx",
  "Content-Type": "application/x-www-form-urlencoded",
  "Accept": "application/json",
};

module.exports = function (cb) {
  request.post({
    url: url,
    headers: headers
  }, function (err, res, body) {
    if (err) return cb(err);
    return cb(null, JSON.parse(body));
  });
}
