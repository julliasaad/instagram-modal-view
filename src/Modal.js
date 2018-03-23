import React from 'react';
import PropTypes from 'prop-types';
import instaOne from './img/insta_1.jpg'; 
import instaTwo from './img/insta_2.jpg'; 
import instaThree from './img/insta_3.jpg'; 
import instaFour from './img/insta_4.jpg';
import imgProfile from './img/Jullia5.jpg';  

function Input(props) {
  return (
    <input type="text" class="input" placeholder="Add a comment..." onKeyPress={props.onKeyPress}/>
  )
}

function Comments(props) {
  const comments = props.comments;
  var commentsList = comments.map((item) => 
    <div key={item.toString()} className="comment">
      <div className="featured-text">{item.user}</div>
      <p>{item.comment}</p>
    </div>
  ); 

  return (
    <div>
      {commentsList}
    </div>
  );
}


class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.slideNumber = 0;

    this.slide = [{
      imageContent: instaOne,
      likes: '88',
      date: 'Mar 21'
    },
    {
      imageContent: instaTwo,
      likes: '60',
      date: 'Mar 21'
    },
    {
      imageContent: instaThree,
      likes: '20',
      date: 'Mar 22'
    },
    {
      imageContent: instaFour,
      likes: '42',
      date: 'Mar 22'
    }];

    this.state = {value: '', showComments: false, previousPost: false, nextPost: false};

    this.comments = [
    [
      {user: 'julliasaad', comment: 'The first fact about me: I love inline skating!'},
      {user: 'somefriend', comment: 'Nice!'}
    ], 
    [
      {user: 'julliasaad', comment: 'This is my pet, Wendy!'},
      {user: 'biafriend', comment: 'Beatufiful <3!'}
    ],
    [
      {user: 'julliasaad', comment: 'She is really crazy!'},
      {user: 'somefriend', comment: 'wow!'}
    ],
    [
      {user: 'julliasaad', comment: 'I love this game! This is the only game I hve ever finished!'},
      {user: 'somefriend', comment: 'haha'},
      {user: 'somefriend', comment: 'Journey? I love this game too'}
    ]];

    this.newComments = [];

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.seeNextPost = this.seeNextPost.bind(this);
    this.seePreviousPost = this.seePreviousPost.bind(this);
    this.renderImage = this.renderImage.bind(this);
  }

  addComment(event) {
    this.setState({
      showComments: true,
    });
    this.newComments.push(event.target.value);
    this.cleanInput(event);
  }

  renderComment() {
    if (!this.state.showComments) {
      return null;
    } else {
      var commentsList = this.newComments.map((comment) => 
        <div key={comment.toString()} className="comment">
          <div className="featured-text">username</div>
          <p>{comment}</p>
        </div>
      ); 
    }
    return (
      <div>
        {commentsList}
      </div>
    );
  }

  renderImage() {
    if(!this.state.nextPost && !this.state.previousPost) {
      return (
        <img src={this.slide[this.slideNumber].imageContent} alt=""/>
      );
    } else if(this.state.nextPost) {
      this.slideNumber++;
    } else if(this.state.previousPost) {
      this.slideNumber--;
    }
    console.log(this.state.nextPost);
    console.log(this.state.previousPost);
    
    return (
      <img src={this.slide[this.slideNumber].imageContent} alt="Instagram image"/>
    );
    
  }
  
  cleanInput(event) {
    event.target.value = '';
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.addComment(event);
    }
  }

  seeNextPost() {
    this.setState({
      nextPost: true,
      previousPost: false
    });
  }

  seePreviousPost() {
    this.setState({
      nextPost: false,
      previousPost: true
    });
  }

  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="dialog">
        <div className="modal"> 
          <div className="modal__content">
            {this.renderImage()}
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
              <Comments comments={this.comments[this.slideNumber]}/>
              <div>
                {this.renderComment()}
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
              <div class="featured-text mar-top">{this.slide[this.slideNumber].likes} likes</div>
              <div class="thin-text mar-top">{this.slide[this.slideNumber].date}</div>
              <hr/>
              <div className="add-comments">
                <Input onKeyPress={this.handleKeyPress}/>
                <span class="fas fa-ellipsis-h"></span>
              </div>
            </div>
          </div>
        </div>
        <span className="fas fa-chevron-left arrow-left" onClick={this.seePreviousPost}></span>
        <span className="fas fa-chevron-right arrow-right" onClick={this.seeNextPost}></span>
        <button className="btn-close" onClick={this.props.onClose}>
          <span className="fas fa-times"></span>
        </button>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool
};

export default Modal;