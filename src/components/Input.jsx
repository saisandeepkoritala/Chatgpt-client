import React, { useState } from 'react';
import "../styles/input.css";
import {useSelector,useDispatch} from "react-redux";
import { setAsked, setData, setQuestion, setisLoading } from '../slices/UserSlice';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Input = () => {
  const {isLoading,isUser,userData} = useSelector((store)=>store.user);
  const dispatch = useDispatch();
  const [message,Setmessage]=useState("");
  
  const handleChangeMessage=(e)=>{
    Setmessage(e.target.value)
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(isUser){
      if(message.trim()!==""){
        dispatch(setisLoading(true));
        // console.log(message);

        const resp = await axios.post("https://chatgpt-server-9fup.onrender.com/api/v1/user/ask",{
          message,
          email:userData.email,
          name:userData.displayName
        })
        
        // const resp = await axios.post("http://localhost:5000/api/v1/user/ask",{
        //   message,
        //   email:userData.email,
        //   name:userData.displayName
        // })
        // console.log(resp.data.data);
        Setmessage("");
        dispatch(setAsked(true));
        dispatch(setQuestion(message));
        dispatch(setData(resp.data.data));
        dispatch(setisLoading(false));
    }
    else{
      toast.error("No input !", {
        position: "top-right",
        style: { background: 'rgba(0, 0, 0, 1)', color: "white", fontWeight: 'bold' }, 
        className: 'custom-toast'
    });
    }
    }
    else{
      toast.error("Login in to access!", {
        position: "top-right",
        style: { background: 'rgba(0, 0, 0, 1)', color: "white", fontWeight: 'bold' }, 
        className: 'custom-toast'
    });
    }
  
  }

  const handleClear=(e)=>{
    e.preventDefault();
    Setmessage("")
  }

  return (
    <form>
      <ToastContainer />
    <textarea
        value={message}
        onChange={handleChangeMessage}
        rows={2}
        placeholder='What is the recipe for chicken biryani?'
        className='message'
      />
    <div className='btns'>
      <button onClick={handleClear} disabled={isLoading}>Clear</button>
      <button onClick={handleSubmit} disabled={isLoading}>Submit</button>
    </div>
    </form>
  )
}

export default Input