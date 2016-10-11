module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            target: {
                files: ['js/*.js', 'css/*.css'],
                tasks: ['uglify', 'cssmin']
            }
        },
        cssmin: {
            combine: {
                files: {
                    'build/css/combined.min.css': ['css/*.css']
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            target: {
                files: {
                    'build/js/combined.min.js': ['js/*.js']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
}
