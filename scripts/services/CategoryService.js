/**
 * Category Service
 * @desc Manage requests and data logic from categories
 * @namespace Factories
 */
(function() {
    'use strict';

    angular
        .module('reedsy')
        .factory('CategoryService', CategoryService);

    CategoryService.$inject = ['$http', 'API', '_'];
    /**
     * @name CategoryService
     * @desc Manage requests and data logic from categories
     * @namespace CategoryService
     * @memberOf Factories
     */
    function CategoryService($http, API, _) {
        // Exports
        return {
            getCategories: getCategories,
        };

        // Private ************************************************
        /**
         * @name getCategories
         * @desc Gets a list of categories
         * @returns {Object} Promise with the list of categories
         * @memberOf Factories.CategoryService
         */
        function getCategories() {
            var categories;

            return $http.get(API.books)
                .then(function (response) {
                    return response.data;
                })
                .then(function (books) {
                    categories = _(books)
                        .pluck('genre.category')
                        .uniq()
                        .value();

                    return categories.sort();
                })
                .catch(function (err) {
                    throw err;
                });
        }
    }

})();
