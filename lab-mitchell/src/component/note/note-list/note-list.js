import React from 'react';
import {renderIf} from '../../../lib/utils';
import NoteItem from '../../note/note-item/note-item';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='note-list'>
        {renderIf(this.props.notes,
          this.props.notes.map(note => <NoteItem key={note.id} item={note} handleRemoveNote={this.props.handleRemoveNote}/>)
        )}
      </div>
    )
  }
}

export default NoteList;