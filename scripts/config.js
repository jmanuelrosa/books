/**
 * Config
 * @desc App config data
 * @namespace Config
 */
(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = [
        '$compileProvider',
        '$locationProvider',
        '$logProvider',
        '$uiViewScrollProvider'
    ];
    /**
     * @name config
     * @desc Configure services and application settings
     * @namespace Config
     * @memberOf Config
     */
    function config(
        $compileProvider,
        $locationProvider,
        $logProvider,
        $uiViewScrollProvider
    ) {
        $logProvider.debugEnabled(true);
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $uiViewScrollProvider.useAnchorScroll();
        // $compileProvider.debugInfoEnabled(true);

    }

})();
