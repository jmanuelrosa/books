/**
 * Reedsy Filters Directive
 * @desc Display and manage filters
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
     * @desc Show and manage filters, changing the route according to the
     *       selected filter
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
     * @desc Manages all fillter's logic from the controller
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

        // The controller activate makes it convenient to re-use the logic for
        // a refresh for the controller/View, keeps the logic together, gets
        // the user to the View faster, makes animations easy on the ng-view
        // or ui-view, and feels snappier to the user.
        activate();
        // Private ************************************************

        /**
         * @name activate
         * @desc Controller logic
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
         * @desc Manages whether or not the item should be displayed
         * @param {Boolean} show Defines whether or not the item should be
         *                       displayed
         * @memberOf Controllers.RsFiltersDirCtrl
         */
        function show(show) {
            vm.showFilters = show;
        }

        /**
         * @name changeFilters
         * @desc Listener that managed if a form element has been modified
         *       with ng-change
         * @returns {Object} New route with filters applied
         * @memberOf Controllers.RsFiltersDirCtrl
         */
        function changeFilters() {
            // vm.selected = _.pick(vm.selected, _.identity);
            vm.selected.page = undefined;
            return $route.updateParams(vm.selected);
        }
    }

})();
