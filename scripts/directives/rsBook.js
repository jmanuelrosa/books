/**
 * Reedsy Book Directive
 * @desc Displays a book according to the data received from the model
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
     * @desc Displays a book through the data obtained from the scope
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
     * @desc Basic Controller to use vm in view
     * @namespace RsBookDirCtrl
     * @memberOf Controllers
     */
    function RsBookDirCtrl() {}

})();
