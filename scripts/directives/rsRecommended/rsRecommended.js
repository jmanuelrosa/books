/**
 * Reedsy Recommended Directive
 * @desc Display a few books recommended
 * @namespace Directives
 */
(function() {
    'use strict';

    angular
        .module('directives.recommended', [])
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
            templateUrl: '/scripts/directives/rsRecommended/rsRecommended.html',
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
