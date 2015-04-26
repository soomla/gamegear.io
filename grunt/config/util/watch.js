// Configuration for Watch task(s)
// Runs specified tasks when file changes are detected
'use strict';


var taskConfig = function(grunt) {

  var config = {
    configFiles: {
      files: [
        'Gruntfile.js',
        'grunt/**/*.js',
        '*.json'
      ],
      options: {
        reload: true,
        interrupt: true
      },
      tasks: [
        'wiredep',
        'serve:nowatch'
      ]
    },
    less: {
      files: ['<%= yeogurt.client %>/styles/**/*.less'],
      tasks: [
        'injector:less',
        'less:server',
        'autoprefixer:server'
      ]
    },
    injectCss: {
      files: [
        '<%= yeogurt.client %>/styles/**/*.css'
      ],
      tasks: [
        'injector:css',
        'autoprefixer:server'
      ]
    },
    injectJs: {
      files: [
        '<%= yeogurt.client %>/scripts/**/*.js',
        '!<%= yeogurt.client %>/scripts/{main,app}.js'
      ],
      tasks: ['injector:scripts']
    },
    js: {
      files: [
        '<%= yeogurt.client %>/app/**/*.js',
        '!<%= yeogurt.client %>/app/**/*.{spec,mock}.js'
      ],
      tasks: [
        'newer:jshint'
      ]
    },
    livereload: {
      options: {
        livereload: '<%= connect.options.livereload %>'
      },
      files: [
        '<%= yeogurt.client %>/*.{ico,png,txt}',
        '<%= yeogurt.client %>/**/*.html',
        '<%= yeogurt.tmp %>/styles/**/*.{css,ttf,otf,woff,svg,eot}',
        '<%= yeogurt.client %>/app/**/*.js',
        '!<%= yeogurt.client %>/app/**/*.{spec,mock}.js',
        '<%= yeogurt.tmp %>/templates/**/*.js',
        '<%= yeogurt.client %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
      ]
    }
  };


  grunt.config.set('watch', config);

};

module.exports = taskConfig;
