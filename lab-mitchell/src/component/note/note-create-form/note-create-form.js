import React from 'react';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.handleAddNote(this.state);
    this.setState({
      title: '',
      content: '',
    });
  }
  // handleSubmit(event) {
  //   event.preventDefault();
  //   let note = {...this.state};
  //   note.id = Math.random().toString();

  //   this.props.dashboard.setState({notes: [...this.props.dashboard.state.notes, note]});
  // }

  render() {
    return (
      <form className='note-create-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
          placeholder='title'/>
        <input
          type='text'
          name='content'
          value={this.state.content}
          onChange={this.handleChange}
          placeholder='content'/>

        <button type='submit'>Add Note</button>
      </form>
    )
  }
}

export default NoteCreateForm;