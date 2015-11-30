/**
 * Config
 * @desc App config data
 * @namespace Config
 */
(function () {
    'use strict';

    angular
        .module('reedsy')
        .config(config);

    config.$inject = ['$compileProvider', '$locationProvider', '$logProvider'];
    /**
     * @name config
     * @desc Configure services and application settings
     * @namespace Config
     * @memberOf Config
     */
    function config($compileProvider, $locationProvider, $logProvider) {
        $logProvider.debugEnabled(true);
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $compileProvider.debugInfoEnabled(false);

    }

})();
