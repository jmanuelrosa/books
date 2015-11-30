/**
 * TimeAgo Filter
 * @desc Filters for angular app
 * @namespace Filters
 */
(function() {
    'use strict';

    angular
        .module('reedsy')
        .filter('timeAgo', timeAgo);

    timeAgo.$inject = ['moment'];
    /**
     * @name timeAgo
     * @desc [text]
     * @param {String} time [text]
     * @returns {String} Date wih relative time
     * @namespace timeAgo
     * @memberOf Filters
     */
    function timeAgo (moment) {
        return function (time) {
            return moment(time).fromNow();
        };
    }

})();
