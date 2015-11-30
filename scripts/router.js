/**
 * Router
 * @desc App routing
 * @namespace Config
 */
(function() {
    'use strict';

    angular
        .module('reedsy')
        .config(router);

    router.$inject = ['$routeProvider'];
    /**
     * @name router
     * @desc Configure application router
     * @namespace Config
     * @memberOf Config
     */
    function router($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../partials/main.html',
                controllerAs: 'vm',
                controller: 'MainCtrl',
                resolve: {
                    books: books
                }
            })
            .when('/:id', {
                templateUrl: '../partials/details.html',
                controllerAs: 'vm',
                controller: 'DetailsCtrl',
                resolve: {
                    book: book
                }
            });

        $routeProvider.otherwise('/');

        // Private ************************************************
        /**
         * @name books
         * @desc Gets a list of books based on filters needed to render the view
         * @param {Service} $route Manages routes
         * @param {Service} BookService Service for manages book
         * @returns {Promise} Promise with the list of books
         * @memberOf Config.router
         */
        function books($route, BookService) {
            var current = $route.current.params.page || 1;
            return BookService.getBooks(
                current,
                6,
                {
                    genre: _.get($route, 'current.params.genre'),
                    category: _.get($route, 'current.params.category'),
                    search: _.get($route, 'current.params.search')
                }
            );
        }

        /**
         * @name book
         * @desc Gets data book needed to render the view
         * @param {Service} $route Manages routes
         * @param {Service} BookService Service for manages book
         * @returns {Object} Promise with book data
         * @memberOf Config.router
         */
        function book($route, BookService) {
            return BookService.getBook($route.current.params.id);
        }
    }

})();
