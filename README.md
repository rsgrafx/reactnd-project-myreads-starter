## React.js Udacity Class - Term 1. My Reads

This application gives you the ability to search and track books. There are three categories you can place books you find in. You can rearrange these books in these categories.

## Installation

Clone the Repo:
`git clone git@github.com:rsgrafx/reactnd-project-myreads-starter.git`

Change Directories:
`cd reactnd-project-myreads-starter`
Install NPM:
run `npm install` or `yarn`
run `npm start` or `yarn start`


##### Notes:
Misc How I approached this project. I tackled this by looking at these core functions needed to be implemented in the app.  

##### _Routing_

Overall routing for the application would be implemented with `react-router-dom`.

##### _Components_
------
* What needed to be represented as a component
* How would I handle state in this component.
* How was I going to pass down the props ( naming )
* Making API calls - reviewing fetch Where in the component lifecycle should you implement the Api calls.
_What propTypes need to be defined on each component_

##### Initial Components I decided on.

* `Search` Component - Serves as parent for both `SearchBar` and `SearchResults` Routes you away from your BookShelf to search for more books.
* `BookShelf` - Holds a Grouping of Shelves (`Shelf` component`).

* `Shelf` - Holds A Grouping of `Book`'s
* `Book` - Card that represents One Book
* `BookControl` ( Gives you control over functionality you have over a `Book` )

#### _State_
=====

* What data does each component need to render?
* Should this data be passed down as prop or state (is it mutable or immutable in the component)
* What functions will need to be passed down as props
