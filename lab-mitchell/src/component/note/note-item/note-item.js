import React from 'react';

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.item ? this.props.item : {};

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    this.props.handleRemoveNote(event);
  }

  render() {
    return (
      <li className='note-item' id={this.state.id}>
        <p>Title: {this.state.title}</p>
        <p>Content: ${this.state.content}</p>
        <button id={this.state.id} onClick={this.handleOnClick}>Delete</button>
      </li>
    )
  }
}

export default NoteItem;