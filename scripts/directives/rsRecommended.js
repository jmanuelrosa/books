/**
 * Reedsy Recommended Directive
 * @desc Display a few books recommended
 * @namespace Directives
 */
(function() {
    'use strict';

    angular
        .module('reedsy')
        .controller('RsRecommendedDirCtrl', RsRecommendedDirCtrl)
        .directive('rsRecommended', rsRecommended);

    /**
     * @name rsRecommended
     * @desc Show recommended books based on model (recommended scope)
     * @namespace rsRecommended
     * @memberOf Directives
     */
    function rsRecommended() {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            bindToController: {
                recommended: '='
            },
            templateUrl: '../../partials/directives/rsRecommended.html',
            controller: 'RsRecommendedDirCtrl',
            controllerAs: 'vm'
        };
    }

    /**
     * @name RsRecommendedDirCtrl
     * @desc Basic Controller to use vm in view
     * @namespace RsRecommendedDirCtrl
     * @memberOf Controllers
     */
    function RsRecommendedDirCtrl() {}

})();
