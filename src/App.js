import React, { Component } from 'react';
import Modal from './components/Modal';
import title from './img/modal-view.png';  
import { injectGlobal } from 'styled-components';

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
        <button className="btn-insta" onClick={this.toggleModal}>
          <span className="fab fa-instagram"></span>
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

injectGlobal`
  body {
    font-family: 'Roboto', sans-serif;
  }

  .App {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .featured-text {
    font-weight: 600;
    color: #262626;
    font-size: 14px;
  }

  .thin-text {
    font-weight: 200;
    color: #666;
    text-transform: uppercase;
    font-size: 10px;
  }

  .btn-insta {
    height: 100px;
    width: 100px;
    padding: 20px;
    margin-top: 2em;
    background: #d6249f;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    color: #fff;
    border: none;
    border-radius: 15px;
    cursor: pointer;
  }
  .btn-insta span {
    font-size: 60px;
  }
  .btn-insta:focus {
    outline: none;
  }

  hr {
    border-color: rgba(38, 38, 38, .1);
    border-width: .5px;
  }

  p {
    font-size: 14px;
  }

  .input {
    border: none;
    height: 21px;
  }
  .input:focus {
    outline: none;
  }

  .mar-left {
    margin-left: .5em;
  }

  .mar-top {
    margin-top: .5em;
  }
`

export default App;
