import React from 'react';
import {renderIf} from '../../lib/utils';
import NoteCreateForm from '../note/note-create-form/note-create-form';
import NoteList from '../note/note-list/note-list';
import Modal from '../modal/modal';
import uuid from 'uuid';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      showUpdate: false,
    };

    this.getOrSetState = this.getOrSetState.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleRemoveNote = this.handleRemoveNote.bind(this);
  };

  getOrSetState() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    }
  }

  handleAddNote(note) {
    note.createdOn = new Date();
    note.id = uuid.v1();
    note.editing = false;
    note.completed = false;

    this.setState(previousState => {
      return {notes: [...previousState.notes, note]};
    });
  };

  handleRemoveNote(event) {
    let id = event.target.id;

    this.setState({notes: this.state.notes.filter(note => note.id !== id)})
  }

  render() { 
    return(
      <div className='main-content'>
        <h1>Dashboard</h1>
        <NoteCreateForm
          dashboard={this.getOrSetState()}
          handleAddNote={this.handleAddNote}
          notes={this.state.notes} />
        <NoteList
          handleRemoveNote={this.handleRemoveNote}
          notes={this.state.notes} />

        {/* {renderIf(!this.state.showError,
          <Modal close={() => this.setState({showError: !this.state.showError})}>
            <section>
              <h1>Update Note</h1>
              
            </section>
          </Modal>
        )} */}

      </div>
    )
  };
};

export default Dashboard;