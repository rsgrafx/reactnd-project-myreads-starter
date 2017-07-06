import React, {Component} from 'react'

export default class BookControl extends Component {
  
  state = {
    book: this.props.book
  }
  
  changeShelf = (event) => {
    let book = (this.props.onDisplay) ? this.props.book : this.state.book
    this.props.handleShelfChange(book, event.target.value)
  }

  render() {
    const {shelf} = this.props
    return(
      <div className="book-shelf-changer">
            <select value={this.state.value}
                onChange={this.changeShelf}
                defaultValue={shelf || "none"}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
       )
    }
}
