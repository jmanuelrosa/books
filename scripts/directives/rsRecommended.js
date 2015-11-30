/**
 * Reedsy Recommended Directive
 * @desc [text]
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
     * @desc [text]
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
     * @desc [text]
     * @namespace RsRecommendedDirCtrl
     * @memberOf Controllers
     */
    function RsRecommendedDirCtrl() {}

})();
