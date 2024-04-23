import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import "../styles/chat.css";
import Answer from './Answer';
import Logo from "../assets/logo.png";
import 'ldrs/dotSpinner'
import {ColorRing } from 'react-loader-spinner'


const Chat = () => {
  const chatRef = useRef(null);
  const { question, data,currentFocus ,userData,isLoading} = useSelector((store) => store.user);

  useEffect(() => {
    // Scroll to the bottom of the chat whenever the question or data array changes
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [question, data]);

  useEffect(() => {
    if (chatRef.current && currentFocus !== null && currentFocus >= 0 && currentFocus < question.length) {
      // Calculate the index of the last visible question in the chat
      const lastVisibleQuestionIndex = Math.min(currentFocus, question.length - 1);
  
      // Find the corresponding question-answer pair
      const questionAnswerPair = chatRef.current.children[lastVisibleQuestionIndex];
  
      // Scroll the question-answer pair into view
      questionAnswerPair.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentFocus, question.length]);
  


  useEffect(() => {
    if (chatRef.current && question.length > 0) {
      const lastQuestion = chatRef.current.lastElementChild;
      lastQuestion.scrollIntoView({ behavior: "smooth" });
    }
  }, [question]);



  return (isLoading?
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    :
    <div className='chat' ref={chatRef}>
      {question.map((questionItem, index) => (
        <div key={index} className="question-answer">

          <div className="question">
              <div className='image'>
                <img src={userData.picture} alt="" />
                <p>You</p>
              </div>
              <h3>{questionItem}</h3>
          </div>

          <div className="chatgpt">
              <div className='image'>
                  <img src={Logo} alt="" />
                  <p>ChatGpt</p>
              </div>
              <Answer string={data[index]}/>
          </div>

        </div>
      ))}
    </div>
  )
};

export default Chat;
