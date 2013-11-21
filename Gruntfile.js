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
                src: '*.html',
                dest: 'bin-debug/'
            },
            json:{
                expand: true,
                cwd: 'src',
                src: '*.json',
                dest: 'bin-debug/'
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
                    ]
                }
            }
        }
//        nodewebkit: {
//            options: {
//                build_dir: './bin', // Where the build version of my node-webkit app is saved
//                mac: true, // We want to build it for mac
//                win: true, // We want to build it for win
//                linux32: false, // We don't need linux32
//                linux64: false // We don't need linux64
//            },
//            src: ['./bin-debug/**/*'] // Your node-wekit app
//        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-node-webkit-builder');

    grunt.registerTask('default', [
        'jshint',
        'less:binDebug',
        'copy:js',
        'copy:images',
        'copy:html',
        'copy:json'//,
        //'nodewebkit'
    ]);
};
