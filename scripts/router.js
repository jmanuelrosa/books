(function() {
    'use strict';

    angular
        .module('reedsy')
        .config(router);

    router.$inject = ['$routeProvider'];
    function router($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../partials/main.html',
                controllerAs: 'vm',
                controller: 'MainCtrl',
                resolve: {
                    books: books
                }
            })
            .when('/:id', {
                templateUrl: '../partials/details.html',
                controllerAs: 'vm',
                controller: 'DetailsCtrl',
                resolve: {
                    book: book
                }
            });

        $routeProvider.otherwise('/');

        // Private ************************************************

        function books($route, BookService) {
            var current = $route.current.params.page || 1;
            return BookService.getBooks(
                current,
                6,
                {
                    genre: _.get($route, 'current.params.genre'),
                    category: _.get($route, 'current.params.category'),
                    search: _.get($route, 'current.params.search')
                }
            );
        }

        function book ($route, BookService) {
            return BookService.getBook($route.current.params.id);
        }
    }

})();
