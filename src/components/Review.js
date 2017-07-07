import React, { Component } from 'react'
import serializeForm from 'form-serialize';

import firebase from '../firebase'
import ReviewList from './ReviewList'

export default class Review extends Component {
  
  state = {
    reviewDetail: "",
    username: localStorage.username || "",
    bookID: "",
    userID: localStorage.token,
    reviews: []
  }
  
  constructor() {
    super()
    
    this.handleReview = this.handleReview.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleReview = (e) => (this.setState({[e.target.name]: e.target.value}))
  handleSubmit = (e) => {
    e.preventDefault()
    const reviewRef = firebase.database().ref("reviews")
    const values = serializeForm(e.target, {hash: true})

    const review = {
      username: this.state.username,
      review: this.state.reviewDetail,
      bookID: values.bookID,
      userID: this.state.userID
    }
    reviewRef.push(review);
    this.setState({reviewDetail: ''})
  }
  
  render() {
    return(
        <div>
          <div className='container'>
              <section>
                  <h3> Leave a review for {this.props.book.title}</h3>
                  <form onSubmit={this.handleSubmit} className="form-horizontal form-group">
                    <div className="row">
                      <input onChange={this.handleReview}
                             type="text"
                             name="username"
                             placeholder="Add Name"
                             className="form-control"
                             value={this.state.username}
                           />
                    <input type="hidden"
                      name="bookID" value={this.props.book.id}
                      onChange={() => {console.log("whatevs")}}
                      />
                    </div>
                    <div className="row">
                      <label>Review details:</label>
                      <textarea onChange={this.handleReview}
                                name="reviewDetail"
                                placeholder="What did you think of this book."
                                className="form-control"
                                value={this.state.reviewDetail}
                              />
                    </div>
                    <button className="btn btn-large btn-success">Leave Review</button>
                  </form>
              </section>
            </div>
            <ReviewList reviews={this.props.reviews} book={this.props.book} />
          </div>
        )
    }
}
