/**
 * Genre Service
 * @desc Manage requests and data logic from genres
 * @namespace Factories
 */
(function() {
    'use strict';

    angular
        .module('services.genre', [])
        .factory('GenreService', GenreService);

    GenreService.$inject = ['$http', 'API', '_'];
    /**
     * @name GenreService
     * @desc Manage requests and data logic from genres
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
         * @desc Gets a list of genres
         * @returns {Object} Promise with the list of genres
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
