import React from 'react';
import PropTypes from 'prop-types';
import instaOne from './img/insta_1.jpg'; 
import instaTwo from './img/insta_2.jpg'; 
import instaThree from './img/insta_3.jpg'; 
import instaFour from './img/insta_4.jpg';
import imgProfile from './img/Jullia5.jpg';  

class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="dialog">
        <div className="modal">
          {this.props.children}
          <div className="modal__content">
            <img src={instaOne} alt=""/>
          </div>
          <div className="modal__informations">
            <div className="modal__informations__header">
              <div className="profile-image">
                <img src={imgProfile} alt=""/>
              </div>
              <h3 class="featured-text">julliasaad</h3>
            </div>
            <hr/>
            <div className="modal__informations__body">
              <div className="comment">
                <div class="featured-text">julliasaad</div>
                <p>The first fact about me: I love inline skating!</p>
              </div>
            </div>
            <hr/>
            <div className="modal__informations__footer">
              <div className="actions-box">
                <div class="left">
                  <span class="far fa-heart"></span>
                  <span class="far fa-comment mar-left"></span>
                </div>
                <span class="far fa-bookmark"></span>
              </div>
              <div class="featured-text mar-top">88 likes</div>
              <div class="thin-text mar-top">Mar 21</div>
              <hr/>
              <div className="add-comments">
                <input type="text" class="input" placeholder="Add a comment..."/>
                <span class="fas fa-ellipsis-h"></span>
              </div>
            </div>
          </div>
          {/* <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div> */}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;