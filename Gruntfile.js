module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    
    less: {
      production: {
        options: {
          paths: ['css']
        },
        files: {
          '<%= pkg.themeFolder %>/css/style.css': '<%= pkg.themeFolder %>/css/less/style.less'
        }
      }
    },

    jshint: {
      files: ['<%= pkg.themeFolder %>/js/src/*.js'],
      options: {
        bitwise: true,
        curly: true,
        eqeqeq: true,
        forin: true,
        freeze: true,
        immed: true,
        indent: 2,
        latedef: true,
        newcap: true,
        noarg: true,
        nonbsp: true,
        plusplus: true,
        quotmark: 'single',
        undef: true,
        strict: true,
        trailing: true,
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true,
          window: true
        }
      }
    },

    uglify: {
      bootstrap: {
        files: {
          '<%= pkg.themeFolder %>/js/lib/bootstrap.min.js': [
            '<%= pkg.themeFolder %>/js/lib/bootstrap/transition.js',
            '<%= pkg.themeFolder %>/js/lib/bootstrap/alert.js',
            '<%= pkg.themeFolder %>/js/lib/bootstrap/button.js',
            '<%= pkg.themeFolder %>/js/lib/bootstrap/carousel.js',
            '<%= pkg.themeFolder %>/js/lib/bootstrap/collapse.js',
            '<%= pkg.themeFolder %>/js/lib/bootstrap/dropdown.js',
            '<%= pkg.themeFolder %>/js/lib/bootstrap/modal.js',
            '<%= pkg.themeFolder %>/js/lib/bootstrap/tooltip.js',
            '<%= pkg.themeFolder %>/js/lib/bootstrap/popover.js',
            '<%= pkg.themeFolder %>/js/lib/bootstrap/scrollspy.js',
            '<%= pkg.themeFolder %>/js/lib/bootstrap/tab.js',
            '<%= pkg.themeFolder %>/js/lib/bootstrap/affix.js',
          ]
        }
      },
      site: {
        files: {
          '<%= pkg.themeFolder %>/js/dist/app.min.js': [
            '<%= pkg.themeFolder %>/js/lib/*.js',
            '<%= pkg.themeFolder %>/js/src/*.js'
          ]
        }
      }
    },

    watch: {
      configFiles: {
        files: [ 'Gruntfile.js' ],
        options: {
          reload: true
        }
      },
      theme: {
        files: ['<%= pkg.themeFolder %>/*.php', '<%= pkg.themeFolder %>/views/*.twig', '<%= pkg.themeFolder %>/img/*']
      },
      less: {
        files: ['<%= pkg.themeFolder %>/css/less/**/*.less'],
        tasks: ['less:production']
      },
      jshint: {
        files: ['<%= pkg.themeFolder %>/js/src/*.js'],
        tasks: ['jshint']
      },
      uglify: {
        files: ['<%= pkg.themeFolder %>/js/src/*.js', '<%= pkg.themeFolder %>/js/lib/*.js'],
        tasks: ['uglify:site']
      },
      options: {
        livereload: true,
      }
    },

    db_dump: {
      "local": {
        "options": {
          "title": "Local DB",
          "database": "<%= db_config.local.db_name %>",
          "user": "<%= db_config.local.username %>",
          "pass": "<%= db_config.local.password %>",
          "host": "<%= db_config.local.host %>",
          "site_url": "<%= db_config.local.site_url %>",
          "backup_to": "db/local.sql",
          "port": "8889"
        }
      },
    },

    db_import: {
      "local": {
        "options": {
          "title": "Local DB",
          "database": "<%= db_config.local.db_name %>",
          "user": "<%= db_config.local.username %>",
          "pass": "<%= db_config.local.password %>",
          "host": "<%= db_config.local.host %>",
          "site_url": "<%= db_config.local.site_url %>",
          "backup_to": "db/local.sql",
          "port": "8889"
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mysql-dump-import');

  grunt.registerTask('default', ['watch']);
}