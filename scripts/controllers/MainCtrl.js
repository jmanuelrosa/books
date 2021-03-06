/**
 * Main Controller
 * @desc Main controller that public a list of books to view
 * @namespace Controllers
 */
(function() {
    'use strict';

    angular
        .module('reedsy')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$location', 'books'];
    /**
     * @name MainCtrl
     * @desc Controller that public a list of books to view
     * @namespace MainCtrl
     * @memberOf Controllers
     */
    function MainCtrl($location, books) {
        var vm = this;

        // Exports
        vm.books = books;
        vm.pager = {
            total: books.meta.total,
            current: $location.search().page || 1,
            previous: books.meta.previous,
            next: books.meta.next,
            limit: books.meta.limit
        };
    }

})();
