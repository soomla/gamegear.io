// Configuration for LESS task(s)
// Compile LESS stylesheets to single `.css` file
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('less', {
    server: {
      options: {
        paths: [
          '<%= yeogurt.client %>/bower_components',
          '<%= yeogurt.client %>/styles',
          '<%= yeogurt.client %>/app/'
        ],
        sourceMap: true,
        sourceMapFilename: '<%= yeogurt.tmp %>/styles/main.css.map',
        sourceMapBasepath: '<%= yeogurt.tmp %>/styles/',
        sourceMapRootpath: '',
        dumpLineNumbers: 'comments',
        outputSourceFiles: true
      },
      expand: true,
      cwd: '<%= yeogurt.client %>/',
      dest: '<%= yeogurt.tmp %>/',
      src: [
        'styles/main.less'
      ],
      ext: '.css'
    },
    dist: {
      options: {
        paths: [
          '<%= yeogurt.client %>/bower_components',
          '<%= yeogurt.client %>/styles',
          '<%= yeogurt.client %>/app/'
        ],
        sourceMap: true,
        sourceMapFilename: '<%= yeogurt.dist %>/styles/main.css.map',
        sourceMapBasepath: '<%= yeogurt.dist %>/styles/',
        sourceMapRootpath: './',
        compress: true,
        outputSourceFiles: true
      },
      expand: true,
      cwd: '<%= yeogurt.client %>/',
      dest: '<%= yeogurt.dist %>/',
      src: [
        'styles/main.less'
      ],
      ext: '.css'
    }
  });

};

module.exports = taskConfig;
