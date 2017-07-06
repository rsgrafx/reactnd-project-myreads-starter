import React from 'react'

const ReviewList = ({reviews}) => {
  return(
    <div className="container">
      <h3>{reviews.length} Reviews found</h3>
      <hr />
      <div className="list-group col-md-12">
        <ul>
          {reviews.map((rev) => (<li key={rev.id} className="list-group-item">
            <h4 className="list-group-item-heading">{rev.username}</h4>
            <p>{rev.review}</p>
           </li>))}
        </ul>
      </div>
    </div>
  )
}

export default ReviewList;
