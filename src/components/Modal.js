import React from 'react';
import PropTypes from 'prop-types';
import instaOne from '../img/insta_1.jpg'; 
import instaTwo from '../img/insta_2.jpg'; 
import instaThree from '../img/insta_3.jpg'; 
import instaFour from '../img/insta_4.jpg';
import imgProfile from '../img/Jullia5.jpg';  
import styled from 'styled-components';

const Dialog = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 50px;
  background-color: rgba(0,0,0,.75);
`;

const ModalContainer = styled.div`
  position: relative;
  max-width: 800px;
  min-height: 480px;
  margin: 0 auto;
  background-color: #fff;
`;

const ModalContent = styled.div`
  position: absolute;
  left: 0;
  max-width: 380px;
  height: 480px;
  display: flex;
  align-items: center;
  background-color: #000;
  img {
    width: 100%;
  }
  @media(min-width:768px){
    display: flex;
    align-items: center;
    max-width: 420px;
    height: 480px;
  }
  @media(min-width:992px){
    max-width: 480px;
    height: 480px;
  } 
`;

const ModalInformations = styled.div`
  position: absolute;
  right: 0;
  width: calc(800px - 510px - 30px);
  height: 100%;
  padding: 15px;
  @media(min-width:768px){
    max-width: calc(800px - 420px - 30px);
  }
  @media(min-width:992px){
    width: calc(800px - 480px - 30px);
  }
`;

const InformationsHeader = styled.div`
  display: flex;
  align-items: center;
  .profile-image {
    img {
      border-radius: 100%;
      width: 50px;
      height: 50px;
    }
  }
  .featured-text {
    margin-left: 1em;
  }
`;

const InformationsBody = styled.div`
  min-height: 250px;
  .comment {
    div, p {
      display: inline;
    }
    p {
      margin-left: .5em;
    }
  }
`;

const InformationsFooter = styled.div`
  height: 50px;
  .actions-box {
    display: flex;
    justify-content: space-between;
    .far {
      font-size: 22px;
    }
  }
  .add-comments {
    position: relative;
    span {
      position: absolute;
      right: 0;
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

const PreviousPost = styled.span`
  position: absolute;
  left: 250px;
  top: 45%;
  cursor: pointer;
  color: #fafafa;
  font-size: 18px;
`;

const NextPost = styled.span`
  position: absolute;
  right: 250px;
  top: 45%;
  cursor: pointer;
  color: #fafafa;
  font-size: 18px;
`;

const CloseModal = styled.button`
    position: absolute;
    top: 1em;
    right: 1em;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #fafafa;
    font-size: 18px;
    &:focus {
      outline: none;
    }
`;


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
      {user: 'julliasaad', comment: 'I love this game! This is the only game I have ever finished!'},
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
      if(this.slideNumber == '3') {
        this.slideNumber = 0;
      } else {
        this.slideNumber++;
      }
    } else if(this.state.previousPost) {
      if(this.slideNumber == '0') {
        this.slideNumber = 3;
      } else {
        this.slideNumber--;
      }
    }
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
      <Dialog className="dialog">
        <ModalContainer className="modal"> 
          <ModalContent className="modal__content">
            {this.renderImage()}
          </ModalContent>
          <ModalInformations className="modal__informations">
            <InformationsHeader className="modal__informations__header">
              <div className="profile-image">
                <img src={imgProfile} alt=""/>
              </div>
              <h3 class="featured-text">julliasaad</h3>
            </InformationsHeader>
            <hr/>
            <InformationsBody className="modal__informations__body">
              <Comments comments={this.comments[this.slideNumber]}/>
              <div>
                {this.renderComment()}
              </div>
            </InformationsBody>
            <hr/>
            <InformationsFooter className="modal__informations__footer">
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
            </InformationsFooter>
          </ModalInformations>
        </ModalContainer>
        <PreviousPost className="fas fa-chevron-left arrow-left" onClick={this.seePreviousPost}></PreviousPost>
        <NextPost className="fas fa-chevron-right arrow-right" onClick={this.seeNextPost}></NextPost>
        <CloseModal className="btn-close" onClick={this.props.onClose}>
          <span className="fas fa-times"></span>
        </CloseModal>
      </Dialog>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool
};

export default Modal;