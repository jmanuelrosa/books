/**
 * Details Controller
 * @desc Public a book to view
 * @namespace Controllers
 */
(function() {
    'use strict';

    angular
        .module('details')
        .controller('DetailsCtrl', DetailsCtrl);

    DetailsCtrl.$inject = ['book'];
    /**
     * @name DetailsCtrl
     * @desc Public a book to view
     * @namespace DetailsCtrl
     * @memberOf Controllers
     */
    function DetailsCtrl(book) {
        var vm = this;

        // Exports
        vm.book = book;
    }

})();
