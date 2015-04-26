// `grunt test`
// Runs all tests and static analysis (i.e. JSHint)

'use strict';

var kits = require(require('path').resolve(__dirname, '../../client/app/kits')).kits;
var _ = require('lodash');
var Promise = require("bluebird");
var request = Promise.promisify(require("request"));

var taskConfig = function(grunt) {
  grunt.registerTask('favicon-base64', 'Convert URL of image to Base64 encoding', function(target) {

    var done = this.async();
    var downloads = [];

    function ClientError(e) {
      return e.code >= 400 && e.code < 500;
    }

    if (target) {
      var kit = _.find(kits, function(kit) {
        return kit.name.toLowerCase() === target.toLowerCase();
      });

      if (kit) {
        request({
          url: 'http://www.google.com/s2/favicons?domain=' + kit.url,
          encoding: null
        }).spread(function (response, body) {
          if (response.statusCode == 200) {
            var data = "data:" + response.headers["content-type"] + ";base64," + body.toString('base64');
            console.log(kit.name);
            console.log('-----------------------------------------');
            console.log('favicon: ' + "'" + data + "',");
            console.log('-----------------------------------------');
          }
        }).catch(ClientError, function(error) {
          console.log('error, exiting!!!');
          process.exit(1);
        }).finally(done);

      }
    } else {

      _.each(kits, function(kit, i) {
        if (kit.url) {
          var download = Promise.delay(200 * i).then(function() {
            return request({
              url: 'http://www.google.com/s2/favicons?domain=' + kit.url,
              encoding: null
            }).spread(function (response, body) {
              if (response.statusCode == 200) {
                var data = "data:" + response.headers["content-type"] + ";base64," + body.toString('base64');
                console.log(kit.name);
                console.log('-----------------------------------------');
                console.log('favicon: ' + "'" + data + "',");
                console.log('-----------------------------------------');
              }
            }).catch(ClientError, function(error) {
              console.log('error, exiting!!!');
              process.exit(1);
            });
          });
          downloads.push(download);
        }
      });

      Promise.all(downloads).then(done);

    }
  });
};

module.exports = taskConfig;




