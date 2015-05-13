// `grunt build`
// Builds out an optimized site through (but not limited to) minification of CSS and HTML,
// as well as uglification and optimization of Javascript, and compression of images.

'use strict';

var taskConfig = function(grunt) {
  grunt.registerTask('build', 'Build a production ready version of your site.', [
    'clean:dist',
    'injector:scripts',
    'injector:less',
    'wiredep',
    'copy:dist',
    'concurrent',
    'useminPrepare',
    'concat:generated',
    'cssmin',
    'autoprefixer:server',
    'usemin',
    'injector:analytics',
    'htmlmin:dist',
    'uglify',
    'clean:tmp'
  ]);
};

module.exports = taskConfig;
