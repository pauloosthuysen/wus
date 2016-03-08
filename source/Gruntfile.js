module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    replace: {
	  build: {
	    src: [
	    	'<%= pkg.srcDir %>/_templates/*.html'
    	],
	    dest: '<%= pkg.srcDir %>/',             
	    replacements: [{
	      from: '@APP_NAME@',                   
	      to: '<%= pkg.name %>'
	    },{
	      from: '@APP_VERSION@',                   
	      to: '<%= pkg.version %>'
	    },{
	      from: '@AUTHOR@',                   
	      to: '<%= pkg.author %>'
	    },{
	      from: '@DESCRIPTION@',                   
	      to: '<%= pkg.description %>'
	    }]
	  }
	},
	concat: {
		app_js: {
			src: [
				'<%= pkg.srcDir %>/_modules.js',
				'<%= pkg.srcDir %>/app.js',
				'<%= pkg.srcDir %>/common/**/_modules.js',
				'<%= pkg.srcDir %>/common/**/service.*.js',
				'<%= pkg.srcDir %>/common/**/directive.*.js',
				'<%= pkg.srcDir %>/**/_modules.js',
				'<%= pkg.srcDir %>/**/service.*.js',
				'<%= pkg.srcDir %>/**/directive.*.js',
				'<%= pkg.srcDir %>/**/controller.*.js'
			],
			dest: '<%= pkg.srcDir %>/assets/js/<%= pkg.name %>-<%= pkg.version %>.js'
		},
		vendor_js: {
			src: [
				'bower_components/jquery/dist/jquery.js',
				'bower_components/angular/angular.js',
				'bower_components/bootstrap/dist/js/bootstrap.js',
				'bower_components/angular-route/angular-route.js',
				'bower_components/angular-bootstrap/ui-bootstrap.js',
				'bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
			],
			dest: '<%= pkg.srcDir %>/assets/js/vendor-<%= pkg.version %>.js'
		},
		vendor_css: {
			src: [
				'bower_components/bootstrap/dist/css/bootstrap.css',
				'bower_components/bootstrap/dist/css/bootstrap-theme.css'
			],
			dest: '<%= pkg.srcDir %>/assets/css/vendor-<%= pkg.version %>.css'
		}
	},
	less: {
	  build: {
	        options: {
	            compress: true,
	        },
	        src: ["<%= pkg.srcDir %>/app.less","<%= pkg.srcDir %>/**/*.less"],
	        dest: "<%= pkg.srcDir %>/assets/css/<%= pkg.name %>-<%= pkg.version %>.css"
	    }
	},
	copy: {
		vendor_fonts: {
			files: [
				{
					expand: true, 
					cwd: 'bower_components/bootstrap/dist/',
					src: [
						'fonts/**'
					], 
					dest: '<%= pkg.srcDir %>/assets/'
				}
			]
		},
		publish: {
			files: [
				{
					expand: true, 
					cwd: '<%= pkg.srcDir %>/',
					src: [
						'**/*.html',
						'!_templates/*.html',
					], 
					dest: '<%= pkg.publishDir %>/'
				},
				{
					expand: true, 
					cwd: '<%= pkg.srcDir %>/',
					src: [
						'assets/**',
					], 
					dest: '<%= pkg.publishDir %>/'
				}
			]
		}
	},
	jshint: {
		options: {
			reporter: require('jshint-stylish'),
			ignores: [
				'<%= pkg.srcDir %>/assets/**'
			]
		},
		build: [
			'<%= pkg.srcDir %>/*.js',
			'<%= pkg.srcDir %>/**/*.js'
		]
	},
	watch: {
	  scripts: {
	    files: [
	    	'<%= pkg.srcDir %>/*.js',
	    	'<%= pkg.srcDir %>/*.less',
	    	'<%= pkg.srcDir %>/**/*.*'
    	],
	    tasks: ['build'],
	    options: {
	      spawn: false,
	    },
	  },
	},
	clean: {
		publish:{
			options: {
				'force': true
			},
			src: ["<%= pkg.publishDir %>/**"]
		}
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

  grunt.registerTask('build', [
  		'jshint:build',
  		'replace:build',
  		'concat:app_js',
  		'concat:vendor_js',
  		'concat:vendor_css',
  		'less:build',
  		'copy:vendor_fonts'
	]);

  grunt.registerTask('publish', [
  		'build',
  		'clean:publish',
  		'copy:publish'
	]);

};