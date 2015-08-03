// Configuration for Copy task(s)
// Copies specified folders/files to specified destination
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('copy', {
    dist: {
      files: [
        {
          expand: true,
          cwd   : '<%= yeogurt.client %>/',
          dest  : '<%= yeogurt.dist %>/',
          src   : [
            'styles/fonts/**/*.{woff,otf,ttf,eot,svg}',
            'images/**/*.{webp}',
            'templates/**/*.html',
            '!*.js',
            '*.{ico,png,txt}',
            'index.html',
            'ad-formats.html',
            'CNAME'
          ]
        },
        {
          expand: true,
          cwd   : '<%= yeogurt.client %>/',
          dest  : '<%= yeogurt.dist %>/',
          src   : ['styles/flags.png']
        }
      ]
    }
  });

};

module.exports = taskConfig;
