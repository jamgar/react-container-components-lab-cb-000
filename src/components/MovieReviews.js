import React from 'react'

const MovieReviews = ({ reviews }) => (
    <ul className="review-list">
    {
      reviews.map(({ display_title }, i) => (
        <li className="review" key={i}>
          <p>{display_title}</p>
        </li>
      ))
    }
    </ul>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
