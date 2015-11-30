/**
 * Directives Module
 * @desc Directives module bootstrapping
 * @namespace Module
 */
(function() {
    'use strict';

    angular
        .module('directives', [
            'directives.book',
            'directives.filters',
            'directives.pagination',
            'directives.recommended'
        ]);

})();
