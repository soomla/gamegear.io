// `grunt serve`
// Starts up a development server that watches for local file changes
// and automatically reloads them to the browser.

'use strict';

var _ = require('lodash');
var Promise = require("bluebird");
var request = Promise.promisify(require("request").defaults({encoding: null}));
var fs = Promise.promisifyAll(require("fs"));

var taskConfig = function(grunt) {


/*
  grunt.registerTask('favicon-base64', '', function(target) {

    // Force task into async mode and grab a handle to the "done" function.
    var done = this.async();

    var kits = require('./../../client/app/kits');
    //console.dir(kits);


    function ClientError(e) {
      return e.code >= 400 && e.code < 500;
    }

    var downloads = [];
    console.log(require('path').resolve(__dirname, '../../client/images/favicons'));
    var files = fs.readdirSync(require('path').resolve(__dirname, '../../client/images/favicons'));
    console.log('===============================  FILES  ====================');
    console.dir(files);
    var existingKits = {};
    _.each(files, function(file) {
      existingKits[file] = true;
    });
    console.log('===============================  KITS  ====================');

    console.dir(existingKits);

    _.each(kits, function(kit) {

      var name = kit.name.toLowerCase().replace(/ /g, '_') + '.png';
      if (!existingKits[name]) {

        var download = request(kit.favicon).then(function(contents) {
          console.log(kit.favicon);
          return fs.writeFileAsync('./client/images/favicons/' + name, contents);
        }).catch(ClientError, function(e) {
          //A client error like 400 Bad Request happened
          //console.log('------------------  ERROR ---------------');
        });
        downloads.push(download);
      }
    });

    Promise.all(downloads).then(function() {
      console.log('===============================  ALL DOWNLOADS COMPLETE  ====================');
      done();
    });










    //var URL = require('url'),
    //    sURL = 'http://www.google.com/s2/favicons?domain=chartboost.com',
    //    oURL = URL.parse(sURL),
    //    http = require('http'),
    //    client = http.createClient(80, oURL.hostname),
    //    request = client.request('GET', oURL.pathname, {'host': oURL.hostname, "Content-Type": "image/png"})
    //  ;
    //
    //request.end();
    //request.on('response', function (response)
    //{
    //  var type = response.headers["content-type"],
    //      prefix = "data:" + type + ";base64,",
    //      body = "";
    //
    //  response.setEncoding('binary');
    //  response.on('end', function () {
    //    var base64 = new Buffer(body, 'binary').toString('base64'),
    //        data = prefix + base64;
    //    console.log('----------------------- IMGAE ------------------------');
    //    console.log(data);
    //    done();
    //  });
    //  response.on('data', function (chunk) {
    //    if (response.statusCode == 200) body += chunk;
    //  });
    //});



  });
*/

  grunt.registerTask('serve', 'Open a development server within your browser', function(target) {
    // Allow for remote access to app/site via the 0.0.0.0 ip address
    if (grunt.option('allow-remote')) {
      grunt.config.set('connect.options.hostname', '0.0.0.0');
    }

    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:tmp',
      'injector',
      'wiredep',
      'less:server',
      //'favicon-base64',
      'autoprefixer:server'
    ]);

    if (target === 'nowatch') {
      return;
    }

    grunt.task.run([
      'connect:server'
    ]);


    return grunt.task.run(['watch']);

  });
};

module.exports = taskConfig;
