/**
 * Reedsy Filters Directive
 * @desc [text]
 * @namespace Directives
 */
(function() {
    'use strict';

    angular
        .module('reedsy')
        .controller('RsFiltersDirCtrl', RsFiltersDirCtrl)
        .directive('rsFilters', rsFilters);

    /**
     * @name rsFilters
     * @desc [text]
     * @namespace rsFilters
     * @memberOf Directives
     */
    function rsFilters() {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            templateUrl: '../../partials/directives/rsFilters.html',
            controller: 'RsFiltersDirCtrl',
            controllerAs: 'vm'
        };
    }

    RsFiltersDirCtrl.$inject = [
        '$route',
        '_',
        'CategoryService',
        'GenreService'
    ];
    /**
     * @name RsFiltersDirCtrl
     * @desc [text]
     * @namespace RsFiltersDirCtrl
     * @memberOf Controllers
     */
    function RsFiltersDirCtrl($route, _, CategoryService, GenreService) {
        var vm = this;

        // Exports
        vm.showFilters = false;
        vm.data = {};
        vm.selected = {
            genre: $route.current.params.genre,
            category: $route.current.params.category,
            search: $route.current.params.search
        };

        // Functions
        vm.show = show;
        vm.changeFilters = changeFilters;

        // Private ************************************************
        activate();

        /**
         * @name activate
         * @desc  [text]
         * @memberOf Controllers.MainCtrl
         */
        function activate() {
            GenreService.getGenres()
                .then(function (genre) {
                    vm.data.genre = genre;
                    return vm.data.genre;
                });

            CategoryService.getCategories()
                .then(function (categories) {
                    vm.data.categories = categories;
                    return vm.data.categories;
                });
        }

        /**
         * @name show
         * @desc  [text]
         * @param {Boolean} show [text]
         * @returns {Object}
         * @memberOf Controllers.rsFiltersDirCtrl
         */
        function show(show) {
            vm.showFilters = show;
        }

        /**
         * @name changeFilters
         * @desc  [text]
         * @returns {Object}
         * @memberOf Controllers.rsFiltersDirCtrl
         */
        function changeFilters() {
            // vm.selected = _.pick(vm.selected, _.identity);
            vm.selected.page = undefined;
            return $route.updateParams(vm.selected);
        }
    }

})();
