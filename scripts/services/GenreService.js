/**
 * Genre Service
 * @desc [text]
 * @namespace Factories
 */
(function() {
    'use strict';

    angular
        .module('reedsy')
        .factory('GenreService', GenreService);

    GenreService.$inject = ['$http', 'API', '_'];
    /**
     * @name GenreService
     * @desc [text]
     * @namespace GenreService
     * @memberOf Factories
     */
    function GenreService($http, API, _) {
        // Exports
        return {
            getGenres: getGenres,
        };

        // Private ************************************************
        /**
         * @name getGenres
         * @desc  [text]
         * @returns {Object}
         * @memberOf Factories.GenreService
         */
        function getGenres() {
            var genre;

            return $http.get(API.books)
                .then(function (response) {
                    return response.data;
                })
                .then(function (books) {
                    genre = _(books)
                        .pluck('genre.name')
                        .uniq()
                        .value();

                    return genre.sort();
                })
                .catch(function (err) {
                    throw err;
                });
        }
    }

})();
