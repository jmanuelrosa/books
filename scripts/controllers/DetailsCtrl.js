/**
 * Details Controller
 * @desc [text]
 * @namespace Controllers
 */
(function() {
    'use strict';

    angular
        .module('reedsy')
        .controller('DetailsCtrl', DetailsCtrl);

    DetailsCtrl.$inject = ['book'];
    /**
     * @name DetailsCtrl
     * @desc [text]
     * @namespace DetailsCtrl
     * @memberOf Controllers
     */
    function DetailsCtrl(book) {
        var vm = this;

        // Exports
        vm.book = book;
    }

})();
