import React from 'react';
import "../styles/navbar.css";
import Account from './Account';
import Login from "./Login";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const {isUser} = useSelector((store)=>store.user)
  return (
    <>
    <div className='navbar'>
      <ul>
        <li>ChatGpt</li>
        <li></li>
        {isUser?<Account />:""}
      </ul>
    </div>
    {!isUser?<Login />:""}
    </>
  )
}

export default Navbar