import React, { useContext, useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'
import AuthProvider, { AuthContext } from '../../context/AuthProvider'

const Header = (props) => {

// const[username , setUsername]=useState(' ')

// if(!data){
//   setUsername('Admin')
// }
// else{
//   setUsername(data.firstName)
// }


const logOut=()=>{
  localStorage.setItem('loggedInUser',' ')
 props.changeUser('')
}
  return (
    
    <div className='flex items-end justify-between'>
     <h1 className='text-2xl'>  Hello 
      <br /> <span className='text-3xl font-semibold'>
      <h1>
        
        User
        
        

        </h1>👋</span>
      </h1>

      <button onClick={logOut} className='bg-red-400 text-white px-3 py-2 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}
export default Header
