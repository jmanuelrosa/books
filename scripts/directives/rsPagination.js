/**
 * Reedsy Pagination Directive
 * @desc Display and manage pagination
 * @namespace Directives
 */
(function() {
    'use strict';

    angular
        .module('reedsy')
        .constant('DEFAULT_MAXPAGES', 5)
        .controller('RsPaginationDirCtrl', RsPaginationDirCtrl)
        .directive('rsPagination', rsPagination);

    /**
     * @name rsPagination
     * @desc Show and manage pagination, changing the route according to the
     *       selected page
     * @namespace rsPagination
     * @memberOf Directives
     */
    function rsPagination() {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            bindToController: {
                options: '='
            },
            templateUrl: '../../partials/directives/rsPagination.html',
            controller: 'RsPaginationDirCtrl',
            controllerAs: 'vm'
        };
    }

    RsPaginationDirCtrl.$inject = ['$route', '_', 'DEFAULT_MAXPAGES'];
    /**
     * @name RsPaginationDirCtrl
     * @desc Manages all pagination logic from the controller
     * @namespace RsPaginationDirCtrl
     * @memberOf Controllers
     */
    function RsPaginationDirCtrl($route, _, DEFAULT_MAXPAGES) {
        var pages;
        var vm = this;

        // Exports
        vm.pages = [];
        vm.previous = vm.options.previous || false;
        vm.rewind = false;
        vm.next = vm.options.next || false;
        vm.forward = false;
        vm.current = _.parseInt(vm.options.current);
        vm.totalPages = _.ceil(vm.options.total / vm.options.limit);

        vm.rewindHandler = rewindHandler;
        vm.previousHandler = previousHandler;
        vm.pageHandler = pageHandler;
        vm.nextHandler = nextHandler;
        vm.forwardHandler = forwardHandler;

        pages = calcPages();

        vm.pages = _.range(pages.first, pages.end);

        // Private ************************************************
        /**
         * @name rewindHandler
         * @desc Move to first page by modifying the url with new new page
         * @returns {Object} New route with params applied
         * @memberOf Controllersrs.RsPaginationDirCtrl
         */
        function rewindHandler() {
            return $route.updateParams({
                page: 1
            });
        }

        /**
         * @name previousHandler
         * @desc Move to previous page by modifying the url with new new page
         * @returns {Object} New route with params applied
         * @memberOf Controllersrs.RsPaginationDirCtrl
         */
        function previousHandler() {
            return $route.updateParams({
                page: vm.current - 1
            });
        }

        /**
         * @name pageHandler
         * @desc Move to page selected by modifying the url with new new page
         * @param {String} page [text]
         * @returns {Object} New route with params applied
         * @memberOf Controllersrs.RsPaginationDirCtrl
         */
        function pageHandler(page) {
            return $route.updateParams({
                page: _.parseInt(page)
            });
        }

        /**
         * @name nextHandler
         * @desc Move to next page by modifying the url with new new page
         * @returns {Object} New route with params applied
         * @memberOf Controllersrs.RsPaginationDirCtrl
         */
        function nextHandler() {
            return $route.updateParams({
                page: vm.current + 1
            });
        }

        /**
         * @name forwardHandler
         * @desc Move to last page by modifying the url with new new page
         * @returns {Object} New route with params applied
         * @memberOf Controllers.RsPaginationDirCtrl
         */
        function forwardHandler() {
            return $route.updateParams({
                page: vm.totalPages
            });
        }

        /**
         * @name forwardHandler
         * @desc [text]
         * @returns {Object} First and last page for render
         * @memberOf Controllers.RsPaginationDirCtrl
         */
        function calcPages() {
            var pageFirst;
            var pageEnd;
            var middle;
            var maxPages;

            maxPages = DEFAULT_MAXPAGES;
            if(vm.totalPages < DEFAULT_MAXPAGES) {
                maxPages = vm.totalPages;
            }

            middle = _.ceil(DEFAULT_MAXPAGES / 2);

            // Show page numbers
            if(vm.totalPages === 1) {
                vm.rewind = false;
                vm.forward = false;
            } else if(vm.current <= middle) {
                vm.rewind = false;
                vm.forward = true;
                pageFirst = 1;
                pageEnd = maxPages;

            } else if(vm.current > (vm.totalPages - middle)) {
                vm.rewind = true;
                vm.forward = false;
                pageFirst = vm.totalPages - maxPages + 1;
                pageEnd = vm.totalPages;
            } else {
                vm.rewind = true;
                vm.forward = true;
                pageFirst = vm.current - 2;
                pageEnd = vm.current + 2;
            }

            if(vm.totalPages <= DEFAULT_MAXPAGES) {
                vm.forward = false;
            }

            return {
                first: pageFirst,
                end: pageEnd + 1
            };
        }
    }

})();
