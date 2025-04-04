import React from 'react'
import '../styles/transactiondetails.css'
import UserCard from './UserCard'
import TransactionList from './TransactionList'
function transactiondetails() {
  return (
    <div className='right-sidebar'>
        <div className='navbar'>
            <img className='alert' src='https://cdn-icons-png.flaticon.com/128/3239/3239952.png'/>
            <div className='notification-mark'></div>
           <div className='profile'>
           <span>Ceptari Tyas</span>
           <img className='image' src='https://cdn-icons-png.flaticon.com/128/11498/11498793.png'/>
           </div>

        </div>
        <UserCard/>
        <TransactionList/>
    </div>
  )
}

export default transactiondetails
