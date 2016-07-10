
// module.exports = function (config) {
//     config.set({
//         basePath: '',
//
//         frameworks: ['jasmine'],
//
//         files: [
//             // {pattern: 'node_modules/**/*.js'},
//             // {pattern: 'build/dev/*.js'},
//             {pattern: 'src/**/*.spec.js'},
//             {pattern: 'src/**/**/*.spec.js'}
//         ],
//
//         exclude: [],
//
//         plugins: [
//             'karma-jasmine'
//         ],
//
//         reporters: ['progress'],
//
//         port: 9876,
//
//         colors: true,
//
//         logLevel: config.LOG_INFO,
//
//         autoWatch: true,
//
//         // browsers: ['Chrome'],
//
//         // customLaunchers: {
//         //     chrome_without_security: {
//         //         base: 'Chrome',
//         //         flags: ['--disable-web-security']
//         //     }
//         // },
//
//         captureTimeout: 60000,
//
//         singleRun: false
//     })
// };


var webpackConfig = require('webpack.config.js');

module.exports = function(config) {
    config.set({
        // конфигурация репортов о покрытии кода тестами
        coverageReporter: {
            dir:'tmp/coverage/',
            reporters: [
                { type:'html', subdir: 'report-html' },
                { type:'lcov', subdir: 'report-lcov' }
            ],
            instrumenterOptions: {
                istanbul: { noCompact:true }
            }
        },
        // spec файлы, условимся называть по маске **_*.spec.js_**
        files: [
            {pattern: 'src/**/*.spec.ts'},
            {pattern: 'src/**/**/*.spec.ts'}
        ],
        frameworks: ['jasmine', 'chai', ],
        // репортеры необходимы для  наглядного отображения результатов
        reporters: ['mocha', 'coverage'],
        preprocessors: {
            'src/**/*.spec.ts': ['webpack'],
            'src/**/**/*.spec.ts': ['webpack'],
        },
        plugins: [
            'karma-jasmine',
            'karma-mocha',
            'karma-chai',
            'karma-coverage',
            'karma-webpack',
            'karma-chrome-launcher',
            'karma-mocha-reporter',
            'karma-sourcemap-loader'
        ],
        browsers: ['Chrome'],
        singleRun: false,
        // передаем конфигурацию webpack
        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },
        webpackMiddleware: {
            noInfo:true
        }

    });
};