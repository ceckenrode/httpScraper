var request = require('request');
var cheerio = require('cheerio');


request('https://twitter.com/justinbieber?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor', function (error, response, html) {
  var $ = cheerio.load(html);
  var result = [];
  $('li .js-stream-item').each(function(i, element){

    result.push(element);

    });
  console.log(result);
});