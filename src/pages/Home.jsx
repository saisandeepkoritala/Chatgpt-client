import React from 'react';
import Navbar from "../components/Navbar";
import History from "../components/History";
import Hero from "../components/Hero";
import Input from "../components/Input";
import "../styles/home.css";
import Chat from "../components/Chat";
import { useSelector,useDispatch } from 'react-redux';



const Home = () => {
  const {asked}= useSelector((store)=>store.user);
  const dispatch = useDispatch();
  return (
    <div className='home'>
      <div className='header'>
        <Navbar />
      </div>
      <div className='section'>
        <div className='section_history'>
          <History />
        </div>
        <div className='section_hero'>
          {!asked?<Hero />:<Chat />}
          <Input />
        </div>
      </div>
    </div>
  )
}

export default Home