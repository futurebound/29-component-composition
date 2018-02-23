import React from 'react';

//THIS THING IS JUST A FRAME FOR WHATEVER YOU TRNA WRAP
class Modal extends React.Component {
  render() {
    return (
      <section className='modal'>
        <span onClick={this.props.close}>x</span>
        {this.props.children}
      </section>
    )
  }
}

export default Modal;