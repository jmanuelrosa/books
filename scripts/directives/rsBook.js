/**
 * Reedsy Book Directive
 * @desc [text]
 * @namespace Directives
 */
(function() {
    'use strict';

    angular
        .module('reedsy')
        .controller('RsBookDirCtrl', RsBookDirCtrl)
        .directive('rsBook', rsBook);

    /**
     * @name rsBook
     * @desc [text]
     * @namespace rsBook
     * @memberOf Directives
     */
    function rsBook() {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            bindToController: {
                book: '='
            },
            templateUrl: '../../partials/directives/rsBook.html',
            controller: 'RsBookDirCtrl',
            controllerAs: 'vm'
        };
    }

    /**
     * @name RsBookDirCtrl
     * @desc [text]
     * @namespace RsBookDirCtrl
     * @memberOf Controllers
     */
    function RsBookDirCtrl() {}

})();
