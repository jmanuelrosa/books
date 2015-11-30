/**
 * Main Router
 * @desc Main module routing
 * @namespace Config
 */
(function() {
    'use strict';

    angular
        .module('main')
        .config(mainRouter);

    mainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
    /**
     * @name mainRouter
     * @desc Configure module router
     * @namespace Config
     * @memberOf Config
     */
    function mainRouter($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/?page&genre&category&search',
                templateUrl: '/scripts/modules/main/main.html',
                controllerAs: 'vm',
                controller: 'MainCtrl',
                resolve: {
                    books: books
                }
            });

        $urlRouterProvider.otherwise('/');

        // Private ************************************************
        /**
         * @name books
         * @desc Gets a list of books based on filters needed to render the view
         * @param {Service} $route Manages routes
         * @param {Service} BookService Service for manages book
         * @returns {Promise} Promise with the list of books
         * @memberOf Config.mainRouter
         */
        function books($stateParams, BookService) {
            var current = $stateParams.page || 1;
            return BookService.getBooks(
                current,
                6,
                {
                    genre: _.get($stateParams, 'genre'),
                    category: _.get($stateParams, 'category'),
                    search: _.get($stateParams, 'search')
                }
            );
        }
    }

})();
