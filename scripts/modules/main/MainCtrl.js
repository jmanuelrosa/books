/**
 * Main Controller
 * @desc Main controller that public a list of books to view
 * @namespace Controllers
 */
(function() {
    'use strict';

    angular
        .module('main')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$state', '$location', 'books'];
    /**
     * @name MainCtrl
     * @desc Controller that public a list of books to view
     * @namespace MainCtrl
     * @memberOf Controllers
     */
    function MainCtrl($state, $location, books) {
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
