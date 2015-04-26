// Configuration for Usemin task(s)
// Reads base template for usemin blocks to enable smart builds that automatically
// concat and minify files.
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('useminPrepare', {
    html: '<%= yeogurt.dist %>/index.html',
    options: {
      root: '<%= yeogurt.client %>',
      dest: '<%= yeogurt.dist %>/'
    }
  });

  grunt.config.set('usemin', {
    html: '<%= yeogurt.dist %>/*.html',
    options: {
      assetsDirs: ['<%= yeogurt.client %>', '<%= yeogurt.client %>/images']
    }
  });

};

module.exports = taskConfig;
