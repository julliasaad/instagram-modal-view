import React, { Component } from 'react';
import Modal from './Modal';
import './App.css';
import title from './img/modal-view.png';  

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <button class="btn-insta" onClick={this.toggleModal}>
          <span class="fab fa-instagram"></span>
        </button>
        <h1>
          <img src={title} alt="Instagram Modal View"/>
        </h1>
        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
        </Modal>
      </div>
    );
  }
}

export default App;
