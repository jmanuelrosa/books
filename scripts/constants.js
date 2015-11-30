(function() {
    'use strict';

    angular
        .module('reedsy')
        .constant('moment', moment)
        .constant('_', _)
        .constant('API', {
            books: '../api/books.json',
        });

})();
