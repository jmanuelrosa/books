/**
 * Book Service
 * @desc Manage requests and data logic from books
 * @namespace Factories
 */
(function() {
    'use strict';

    angular
        .module('services.books', [])
        .constant('DEFAULT_RECOMMENDED', 3)
        .constant('DEFAULT_LIMIT', 6)
        .factory('BookService', BookService);

    BookService.$inject = [
        '$http',
        '_',
        'API',
        'DEFAULT_LIMIT',
        'DEFAULT_RECOMMENDED'
    ];
    /**
     * @name BookService
     * @desc Manage requests and data logic books
     * @namespace BookService
     * @memberOf Factories
     */
    function BookService($http, _, API, DEFAULT_LIMIT, DEFAULT_RECOMMENDED) {
        // Exports
        return {
            getBooks: getBooks,
            getBook: getBook
        };

        // Private ************************************************
        /**
         * @name getBooks
         * @desc Gets a list of books based on the category filters, gender
         * and search, if any exist.
         * @param {Number} skip Skipped elements
         * @param {Number} limit Number os items in list
         * @returns {Promise} Promise with the list of books
         * @memberOf Factories.BookService
         */
        function getBooks(page, limit, filters) {
            var totalPages;
            var activeFilters;
            var res;

            page = _.parseInt(page) || 1;
            limit = limit || DEFAULT_LIMIT;
            activeFilters = _.omit(filters, 'search');
            activeFilters = {
                genre: {
                    category: filters.category || undefined,
                    name: filters.genre || undefined
                }
            };
            activeFilters.genre = _.pick(activeFilters.genre, _.identity);

            return $http.get(API.books)
                .then(function (response) {
                    return response.data;
                })
                .then(function (books) {
                    return _.filter(books, activeFilters);
                })
                .then(function (books) {
                    var search;
                    if(filters.search) {
                        search = filters.search.toLowerCase();
                        books = _.filter(books, function (book) {
                            return book.name.toLowerCase()
                                .indexOf(search) > -1 ||
                                book.author.name.toLowerCase()
                                .indexOf(search) > -1;
                        });
                    }

                    return books;
                })
                .then(function (books) {
                    totalPages = _.ceil(books.length / limit);
                    res = {
                        data: _.slice(books, limit * (page - 1), limit * page),
                        meta: {
                            total: books.length,
                            limit: limit
                        }
                    };

                    if(totalPages > 1) {
                        if(page === 1) {
                            res.meta.next = page + 1;
                        }
                        else if(page === totalPages) {
                            res.meta.previous = page - 1;
                        }
                        else {
                            res.meta.previous = page - 1;
                            res.meta.next = page + 1;
                        }
                    }

                    return res;
                })
                .catch(function (err) {
                    throw err;
                });
        }

        /**
         * @name getBook
         * @desc Gets a book data
         * @param {String} id Book identifier
         * @returns {Object} Promise with book data
         * @memberOf Factories.BookService
         */
        function getBook(id) {
            var book;
            var recommended;
            var length;

            return $http.get(API.books)
                .then(function (response) {
                    return response.data;
                })
                .then(function (books) {
                    book =  _.find(books, 'id', id);

                    var without = _.chain(books)
                        .without(book);

                    recommended = without.where({
                          'genre': {
                             'category': book.genre.category,
                             'name': book.genre.name
                          }
                        })
                        .value();

                    length = recommended.length;

                    if(recommended.length < DEFAULT_RECOMMENDED) {
                        recommended = without
                            .xor(recommended)
                            .filter(function (b) {
                                if(b.genre.category === book.genre.category ||
                                    b.genre.name === book.genre.name
                                ) {
                                    return true;
                                }
                            })
                            .slice(0, DEFAULT_RECOMMENDED - length)
                            .union(recommended)
                            .value();
                    }
                    else {
                        recommended = _.slice(
                            recommended,
                            0,
                            DEFAULT_RECOMMENDED
                        );
                    }

                    book.recommended = recommended;

                    return book;
                })
                .catch(function (err) {
                    throw err;
                });
        }
    }

})();
