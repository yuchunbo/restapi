/*
 * grunt-restful-mock
 * 
 *
 * Copyright (c) 2014 bubkoo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        mock: {
            options: {
                debug: true,
                // 监视配置文件变化，自动重启服务
                watch: 'grunt/mock.js'
            },

            demo: {
                options: {
                    port: '6001',
                    debug: true,
                    placeholders: {
                        gender: function (){
                            return this.bool()?"女":"男";
                        }
                    }
                },
                cwd: 'rest',
                src: ['*.js', '*.yaml', '*.coffee', '*.json']
            }
        }
    });

    grunt.loadNpmTasks('grunt-restful-mock');
};
