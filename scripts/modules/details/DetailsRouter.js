/**
 * Details Router
 * @desc Details module routing
 * @namespace Config
 */
(function() {
    'use strict';

    angular
        .module('details')
        .config(detailsRouter);

    detailsRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
    /**
     * @name detailsRouter
     * @desc Configure module router
     * @namespace Config
     * @memberOf Config
     */
    function detailsRouter($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('details', {
                url: '/:id',
                templateUrl: '/scripts/modules/details/details.html',
                controllerAs: 'vm',
                controller: 'DetailsCtrl',
                resolve: {
                    book: book
                }
            });

        $urlRouterProvider.otherwise('/');

        // Private ************************************************

        /**
         * @name book
         * @desc Gets data book needed to render the view
         * @param {Service} $route Manages routes
         * @param {Service} BookService Service for manages book
         * @returns {Object} Promise with book data
         * @memberOf Config.detailsRouter
         */
        function book($stateParams, BookService) {
            return BookService.getBook($stateParams.id);
        }
    }

})();
