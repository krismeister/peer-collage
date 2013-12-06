/* global module: false */
module.exports = function(grunt) {
    "use strict";
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            js: {
                expand: true,
                cwd: 'src/js/',
                src: '**/*',
                dest: 'bin-debug/js/'
            },
            images: {
                expand: true,
                cwd: 'src/images/',
                src: '**/*',
                dest: 'bin-debug/images/'
            },
            html:{
                expand: true,
                cwd: 'src',
                src: '**/*.html',
                dest: 'bin-debug/'
            },
            sounds:{
                expand: true,
                cwd: 'src/sounds/',
                src: '**/*',
                dest: 'bin-debug/sounds/'
            },
			      bin:{
				        expand: true,
                cwd: 'bin-debug/',
                src: '**/*',
                dest: 'bin'
			      }
        },
        less: {
            binDebug: {
                options: {
                    strictImports: true,
                    syncImport: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: [
                        '*.less'
                    ],
                    dest: 'bin-debug/css',
                    ext: '.css'
                }]
            }
        },
        watch: {
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['jshint:src','copy:js']
            },
            images: {
                files: ['src/images/**/*'],
                tasks: ['copy:images']
            },
            css: {
                files: ['src/css/**/*.less'],
                tasks: ['less:binDebug']
            },
            html: {
                files: ['src/**/*.html'],
                tasks: ['copy:html']
            }
        },
        jshint: {
            src: {
                files: {
                    src: [
                        'Gruntfile.js',
                        'src/js/**/*.js'
                    ]
                },
                options: {
                    ignores: [
						'src/js/libs/**/*.js'
                    ],
                smarttabs : true,
                "-W099": true, // allowed mixed tabs and spaces
                "-W040" : true //allow the 'this' keyword
                }
            },
            server: {
                files: {
                    src: [
                        'server/**/*.js'
                    ]
                },
                options: {
                    ignores: [
                    ],
					          smarttabs : true,
					          "-W099": true, // allowed mixed tabs and spaces
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', [
        'jshint:src',
        'less:binDebug',
        'copy:js',
        'copy:images',
        'copy:html',
        'copy:sounds'
    ]);
    grunt.registerTask('deploy', [
        'jshint:server',
        'default',
		'copy:bin'
    ]);
};
