/**
 * App
 * @desc App entry point
 * @namespace Module
 */
(function () {
    'use strict';

    angular
        .module('app', ['modules', 'services', 'directives', 'filters'])
        .run(run);

    function run() {}

})();
