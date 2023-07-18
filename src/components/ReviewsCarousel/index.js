// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  prevReview = () => {
    const {index} = this.state
    if (index === 0) {
      this.setState({index: 0})
    } else {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  nextReview = () => {
    const {index} = this.state
    if (index < 3) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  getReview = () => {
    const {index} = this.state
    const {reviewsList} = this.props

    return reviewsList[index]
  }

  render() {
    const currentReview = this.getReview()

    const {imgUrl, username, companyName, description} = currentReview

    const reviewApp = (
      <div className="home-page-cont">
        <div className="content-cont">
          <h1 className="title">Reviews</h1>
          <div className="review-cont">
            <button
              className="arrow-btn"
              type="button"
              data-testId="leftArrow"
              onClick={this.prevReview}
            >
              <img
                className="arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
                alt="left arrow"
              />
            </button>
            <div className="profile-tag-cont">
              <img className="profile-img" alt={username} src={imgUrl} />
              <p className="user-name">{username}</p>
              <p className="company-name">{companyName}</p>
              <p className="review">{description}</p>
            </div>
            <button
              className="arrow-btn"
              type="button"
              data-testId="rightArrow"
              onClick={this.nextReview}
            >
              <img
                className="arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
    return reviewApp
  }
}

export default ReviewsCarousel
