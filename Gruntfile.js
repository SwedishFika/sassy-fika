module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      sass: {
        files: [
        '<%= assets_location%>/**/*.scss'
        ],
        tasks: ['sass']
      },
      css: {
        files: [
        '<%= assets_location%>/css/style.css'
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

    sass: {
        dist: {
          options: {
            style: 'expanded'
          },
          files: {
            '<%= assets_location%>/css/style.css': '<%= assets_location%>/scss/style.scss'
          }
        }
    },

    cssmin: {
      combine: {
        files: {
          '<%= assets_location%>/css/style.min.css': ['<%= assets_location%>/css/style.css']
        }
      }
    },

    'assets_location': 'assets',
    'ghost_theme_name': 'sassy-fika',

  });

  // Load grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

};