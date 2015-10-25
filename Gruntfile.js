module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {
          'css/material-foundation.css': 'scss/material-foundation.scss',
          'css/demo.css': 'scss/demo.scss'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/material-foundation.js': [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/fastclick/lib/fastclick.js',
            'bower_components/foundation/js/foundation.js',
            'js/dropdown.js',
            'js/scripts.js',
            'js/ripple.js',
            'js/switches.js'
          ]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['sass']);
};