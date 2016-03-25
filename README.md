# Books

## Install dependencies

`npm install`

## Running the server

`npm start`
or
`npm run start`

The server will start to listen http://localhost:8000

## Linters

`npm run linter`

## Notes
* The code is based on best practices and style guides from 
[Todd Motto](https://github.com/toddmotto/angularjs-styleguide) and 
[John Papa](https://github.com/johnpapa/angular-styleguide)
* The project is so small that it is not necessary to use automated tasks.
* Due to the size of the project, package management from NPM is enough.

# Test

## Discover Section Challenge

Create a SPA, that displays the books available in the `books.json` file in this Gist.
An example wireframe is also attached to this Gist, but please feel free to deviate and be as creative as you like.

### Requirements

This is a small 2 page SPA, consisting of an index page (list of books) and a show page (detailed view of each book).

* The books index page should be:

    - Filterable (by category and genre)
    - Searchable (by title and author)
    - Pageable (either frontend or backend pagination is fine for this)

* The books index page should show the following data for each book:

    - Cover image
    - Title
    - Author
    - Votes
    - Published date (bonus points for relative time)

* When a book is clicked it then displays the books show page.

* The books show page should display the same data visible from the index page with the addition of:

    - Author avatar
    - Introductory contents
    - 3 recommended books (from a similar genre and category)

* Your implementation should be provided as a public Github repository, with instructions on how to run the code locally.

### What we'll be looking at

* The structure, modularity and overall quality of any code and markup.
* The suitability of the chosen technologies
* Documentation
* Creativity
