/**
 * Category Service
 * @desc [text]
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
     * @desc [text]
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
         * @desc  [text]
         * @returns {Object}
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
