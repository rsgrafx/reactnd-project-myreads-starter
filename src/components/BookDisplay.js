import React, {Component} from "react"
import {Link} from "react-router-dom"

import firebase from '../firebase'
import * as BooksAPI from "../BooksAPI"
import BookControl from "./BookControl"
import Nav from "./Nav"
import SearchLink from "./SearchLink"
import Review from './Review'

export default class BookDisplay extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      book: {},
      url: '',
      reviews: []
    }
  }
  
  componentWillMount() {
    const {match} = this.props.router
    BooksAPI.get(match.params.id)
      .then(book => this.setState({book: book, url: book.imageLinks.thumbnail}))
    this.returnReviewFor(match.params.id)
  }
  
  returnReviewFor(bookID) {
    const reviewRef = firebase.database().ref('reviews')
    
    reviewRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          bookID: items[item].bookID,
          username: items[item].username,
          review: items[item].review
        });
      }
      let reviews = newState.filter(review => (review.bookID === bookID))
      this.setState({
        reviews: reviews
      });
    });
  }
  
  render() {
    const search = <SearchLink />
    const {book} = this.state
    const {addToShelf} = this.props
    
    return(
      <div>
        <Nav navLink={search} />
        <div className="bookshelf container">
          <h3>Book Title: {book.title} </h3>
          <div id="book-display">Current shelf: {book.shelf}
            <div>
              <img src={this.state.url} alt={book.title}/>
              <BookControl
                onDisplay={true}
                handleShelfChange={addToShelf}
                book={book}
                shelf={book.shelf} />
            </div>
          </div>
          <hr />
          <p>{!!(book.description) && book.description}</p>
          <div>
            <b>Author(s): {book.authors} </b><br />
            <small> Pages: {book.pageCount} </small><br />
            <small> Published: {book.publishedDate} </small><br />
            <small> Publisher: {book.publisher} </small>
          </div>
        </div>
        <Review book={book}
          reviews={this.state.reviews}/>
        <div className="nav-bar">
          <Link to="/">My BookShelf</Link>
        </div>
      </div>
    )
  }
}
