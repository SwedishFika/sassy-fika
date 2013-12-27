module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      compass: {
        files: [
        'scss/*'
        /*'bower_components/normalize-css/normalize.css'*/
        ],
        tasks: ['compass']
      },
      css: {
        files: [
        'css/*'
        ],
        tasks: ['cssmin']
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      combinejs: {
        files: {
          /*TODO: add necessary js-files here…
          '<%assets_location%>/js/all.min.js':
          [
          'bower_components/modernizr/modernizr.js'
          ]*/
        }
      }
    },

    compass: {
      dev: {
        options: {
          sassDir: 'scss',
          cssDir: 'css'
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          '<%assets_location%>/css/style.css': ['css/style.css']
        }
      }
    },

    'assets_location': 'assets',
    'ghost_theme_name': 'sassy-fika',

  });

  // Load grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

};