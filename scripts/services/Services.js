/**
 * Services Module
 * @desc Services module bootstrapping
 * @namespace Module
 */
(function() {
    'use strict';

    angular
        .module('services', [
            'services.genre',
            'services.category',
            'services.books'
        ]);

})();
