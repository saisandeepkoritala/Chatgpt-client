import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../styles/history.css";
import {setQuestion, setcurrentFocus,setData, setAsked} from '../slices/UserSlice';
import axios from "axios";

const History = () => {

  const dispatch = useDispatch();
  const {question,userData,isUser} = useSelector((store)=>store.user);
  const reversedQuestions = [...question].reverse();

  useEffect(()=>{
    const getHistory=async()=>{
      const History = await axios.post("https://chatgpt-server-9fup.onrender.com/api/v1/user/getHistory",{
        email:userData.email,name:userData.displayName
      })

      console.log("data",History.data.data)
      if(History.data.data.length>0){
        dispatch(setAsked(true))
      }
      History.data.data.map((item)=>{
        dispatch(setQuestion(item.question))
        dispatch(setData(item.answer));
      })
    }

    getHistory();
  },[isUser])

  const Render = reversedQuestions.map((item, i) => {
    let displayQuestion = item;
    if (item.length > 50) {
      displayQuestion = item.substring(0, 50) + '...';
    }

    const handleHistory=(i)=>{
      dispatch(setcurrentFocus(i))
    }

    const currentLength = reversedQuestions.length;

    return (
      <div key={i} className='history_question'>
        <p onClick={()=>handleHistory(currentLength - i-1)}>{displayQuestion}</p>
      </div>
    );
  });

  return (
    <div className='history'>
        {Render}
    </div>
  );
}

export default History;
