// Configuration for Injector task(s)
// Injects Link/Import statements in to specified files
'use strict';

var _str = require('underscore.string');

var taskConfig = function(grunt) {

  grunt.config.set('injector', {
    options: {

    },
    // Inject application script files into index.html (doesn't include bower)
    scripts: {
      options: {
        transform: function(filePath) {
          filePath = filePath.replace('/client/', '');
          return '<script src="/' + filePath + '"></script>';
        },
        starttag: '<!-- [injector:js] -->',
        endtag: '<!-- [endinjector] -->'
      },
      files: {
        '<%= yeogurt.client %>/index.html': [
          '<%= yeogurt.client %>/app/**/*.js',
          '!<%= yeogurt.client %>/app/main.js',
          '!<%= yeogurt.client %>/app/**/*.spec.js',
          '!<%= yeogurt.client %>/app/**/*.mock.js',
          '!<%= yeogurt.client %>/scripts/main.js'
        ],
        '<%= yeogurt.client %>/ad-formats.html': [
          '<%= yeogurt.client %>/app/**/*.js',
          '!<%= yeogurt.client %>/app/main.js',
          '!<%= yeogurt.client %>/app/**/*.spec.js',
          '!<%= yeogurt.client %>/app/**/*.mock.js',
          '!<%= yeogurt.client %>/scripts/main.js'
        ]
      }
    },
    // Inject component less into main.less
    less: {
      options: {
        transform: function(filePath) {
          if (filePath.indexOf('app') > -1) {
            filePath = filePath.replace('/client/', '../');
          }
          else {
            filePath = filePath.replace('/client/styles/', '');
          }
          return '@import \'' + filePath + '\';';
        },
        starttag: '// [injector]',
        endtag: '// [endinjector]'
      },
      files: {
        '<%= yeogurt.client %>/styles/main.less': [
          '<%= yeogurt.client %>/styles/**/*.less',
          '!<%= yeogurt.client %>/styles/main.less',
          '<%= yeogurt.client %>/app/**/*.less'
        ]
      }
    },
    analytics: {
      options :{
        transform: function(filePath) {
          return require('fs').readFileSync('.' + filePath);
        },
        starttag: '<!-- [injector:analytics] -->',
        endtag: '<!-- [endinjector] -->'
      },
      files: {
        '<%= yeogurt.dist %>/index.html': [
          '<%= yeogurt.client %>/analytics.html'
        ],
        '<%= yeogurt.dist %>/ad-formats.html': [
          '<%= yeogurt.client %>/analytics.html'
        ]
      }
    }
  });

};

module.exports = taskConfig;
