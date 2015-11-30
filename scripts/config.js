(function () {
    'use strict';

    angular
        .module('reedsy')
        .config(config);


    config.$inject = ['$compileProvider', '$locationProvider', '$logProvider'];
    function config($compileProvider, $locationProvider, $logProvider) {
        $logProvider.debugEnabled(true);
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $compileProvider.debugInfoEnabled(false);

    }

})();
